import React, { Component } from 'react';
import firebase from 'firebase';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { PulseLoader } from 'react-spinners';
import { Fade } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Anatomy from "../components/anatomy/Anatomy"
import BottomBar from '../components/BottomBar';
import { Slider } from 'antd';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"

const marks = ['Apr','May','Jun','Jul']


const painSpotsToData = painSpots => {
    const data = []
    marks.forEach(key=>{
        if(painSpots[key]) {
            const arr = painSpots[key]
            data.push({key, numPainspots: Object.keys(arr).length})
        }
    })
    console.log(data)
    return data
}

const fitbitFoodToData = fitbit => {
    if (fitbit && fitbit.foods){
        console.log(fitbit.foods)
        return fitbit.foods
    }
    return []
}

class AnalyticsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            month: 'Apr',
            painSpots: { Jul: [] }
        };
    }


    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 20);

        firebase.database().ref().on('value', ss => {
            console.log('ss', ss.val());
            const { android_sensor, fitbit, painSpots } = ss.val();
            this.setState({ android_sensor, fitbit, painSpots });
        });
    }

    renderLoading = () => {
        return (
            <LoadingView>
                <PulseLoader color='rgb(255, 91, 91)' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderTimeline = () => {
        return (
            <Slider marks={{ 0: 'Apr', 1: '', 2: '', 3: 'Jul' }}
                    min={0}
                    max={3}
                    default={0}
                    tipFormatter={i => marks[i]}
                    onChange={i => {
                        this.setState({ month: marks[i] })
                    }}
                    style={{ minWidth: 180, width: 180 }}
            />
        );
    };

    renderBody = () => {

        return (
            <ScrollView>
                <div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Fade in={200}>
                        <h2 style={{ marginTop: 8, fontWeight: 700 }}>Analytics</h2>
                    </Fade>
                    <h3 style={{ marginTop: 8, fontWeight: 400 }}>Number of records over time</h3>
                    <LineChart width={300} height={200} data={painSpotsToData(this.state.painSpots)}>
                        <XAxis dataKey="key"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="numPainspots" stroke="#8884d8" />
                    </LineChart>
                    <h3 style={{ marginTop: 8, fontWeight: 400 }}>Latest food consumption</h3>
                    {fitbitFoodToData(this.state.fitbit).map(food=>{
                        return <div>{food}</div>
                    })}
                </div>
            </ScrollView>
        );
    };

    render() {
        return (
            <div style={styles.container}>
                <TopBar />
                {this.state.ready ? this.renderBody() : this.renderLoading()}
                <BottomBar />
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
