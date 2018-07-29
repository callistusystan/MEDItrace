import React, {Component} from 'react';
import firebase from 'firebase';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import {PulseLoader} from 'react-spinners';
import Fade from '@material-ui/core/Fade';
import TopBar from '../components/TopBar';
import Anatomy from "../components/anatomy/Anatomy"
import BottomBar from '../components/BottomBar';
import {Slider} from 'antd';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"
import ListItem from "@material-ui/core/ListItem/ListItem";
import List from "@material-ui/core/List/List";
import HRIcon from "../images/cardiogram.svg"
import WDIcon from "../images/water.svg"
import STIcon from "../images/bed.svg"
import Card from "../components/Card";
import AnatomyIcon from "../images/anatomy.svg"
import LineIcon from "../images/line-graph.svg"
import DietIcon from "../images/diet.svg"

const marks = ['Apr', 'May', 'Jun', 'Jul']


const painSpotsToData = painSpots => {
    const data = []
    marks.forEach(key => {
        if (painSpots[key]) {
            const arr = painSpots[key]
            data.push({key, "Num Records": Object.keys(arr).length})
        }
    })
    console.log(data)
    return data
}

const fitbitFoodToData = fitbit => {
    if (fitbit && fitbit.foods) {
        const foods = fitbit.foods
        return foods.slice(Math.max(foods.length - 5, 0))
    }
    return []
}

const fitbitBodyToData = fitbit => {
    if (fitbit) {
        return {
            heartRate: fitbit.resting_heart_rate,
            sleepTime: fitbit.sleep_mins,
            waterDrank: fitbit.water_ml
        }
    }
    return {heartRate:null,sleepTime:null,waterDrank:null}
}

class AnalyticsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            month: 'Apr',
            painSpots: {Jul: []}
        };
    }


    componentDidMount() {
        setTimeout(() => this.setState({ready: true}), 20);

        firebase.database().ref().on('value', ss => {
            console.log('ss', ss.val());
            const {android_sensor, fitbit, painSpots} = ss.val();
            this.setState({android_sensor, fitbit, painSpots});
        });
    }

    renderLoading = () => {
        return (
            <LoadingView>
                <PulseLoader color='rgb(255, 91, 91)' loading={!this.state.ready}/>
            </LoadingView>
        );
    };

    renderTimeline = () => {
        return (
            <Slider marks={{0: 'Apr', 1: '', 2: '', 3: 'Jul'}}
                    min={0}
                    max={3}
                    default={0}
                    tipFormatter={i => marks[i]}
                    onChange={i => {
                        this.setState({month: marks[i]})
                    }}
                    style={{minWidth: 180, width: 180}}
            />
        );
    };

    renderBody = () => {
        const {heartRate,sleepTime,waterDrank} = fitbitBodyToData(this.state.fitbit)
        let hr = heartRate || "NA"
        let st = sleepTime || "NA"
        let wd = waterDrank || "NA"
        return (
            <ScrollView>
                <div style={{height: 'auto', display: 'flex', flexDirection: 'column'}}>
                    <Fade in={200}>
                        <h2 style={{marginTop: 8, fontWeight: 700}}>Analytics</h2>
                    </Fade>
                    <Card to='/analytics' img={AnatomyIcon} style={{ backgroundColor: '#2ecc71', marginTop: 16 }}>
                        Body Stats
                    </Card>
                    <List>
                        <ListItem>
                            <img src={HRIcon} width={20} height={20} alt="" style={{marginRight:10}}/>
                            Heart Rate: {hr} bpm
                            </ListItem>
                        <ListItem>
                            <img src={STIcon} width={20} height={20} alt="" style={{marginRight:10}}/>
                            Sleep Time: {st} minutes
                            </ListItem>
                        <ListItem>
                            <img src={WDIcon} width={20} height={20} alt="" style={{marginRight:10}}/>
                            Water Consumption: {wd} ml
                            </ListItem>
                    </List>
                    <Card to='/analytics' img={LineIcon} style={{ backgroundColor: '#3498db', marginTop: 16, marginBottom:20 }}>
                        Number of Records over Past Months
                    </Card>
                    <LineChart width={300} height={200} data={painSpotsToData(this.state.painSpots)}>
                        <XAxis dataKey="key"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="monotone" dataKey={"Num Records"} stroke="#8884d8"/>
                    </LineChart>
                    <Card to='/analytics' img={DietIcon} style={{ backgroundColor: '#9b59b6', marginTop: 16,  }}>
                        Food Consumption over Past Months
                    </Card>
                    <List>
                        {fitbitFoodToData(this.state.fitbit).map(food => {
                            return <div style={{margin:10}}>{food}</div>
                        })}
                    </List>

                </div>
            </ScrollView>
        );
    };

    render() {
        return (
            <div style={styles.container}>
                <TopBar/>
                {this.state.ready ? this.renderBody() : this.renderLoading()}
                <BottomBar/>
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFF'
    }
};

export default AnalyticsPage;
