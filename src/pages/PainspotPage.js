import React, { Component } from 'react';
import DeviceBar from '../components/react-mobile-hackathon/devices/DeviceBar';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { GridLoader, PulseLoader } from 'react-spinners';
import { Fade } from '@material-ui/core';
import TopBar from '../components/TopBar';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Doctor from '../images/doctor.png';
import AnalyticsIcon from "../images/analytics.svg"
import Stethoscope from '../images/stethoscope.png';
import BottomBar from '../components/BottomBar';
import { MyRater } from '../components/MyRater';
import Img from 'react-image';

class PainspotPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ready: false
        };

        if (!(this.props.location.state && this.props.location.state.painSpot)) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 500);
    }

    renderLoading = () => {
        return (
            <LoadingView>
                <PulseLoader color='rgb(255, 91, 91)' loading={!this.state.ready}/>
            </LoadingView>
        );
    };

    renderRatings = () => {
        const { painSpot } = this.props.location.state;
        if (painSpot.ratings) {
            return (
                <div>
                    <Fade in timeout={600}>
                        <div style={{ display: 'flex', marginTop: 16, alignItems: 'center' }}>
                            <h3 style={{ color: '#555', width: 100 }}>Pain:</h3>&nbsp;
                            <MyRater interactive={false} rating={painSpot.ratings.pain} />
                        </div>
                    </Fade>
                    <Fade in timeout={600}>
                        <div style={{ display: 'flex', marginTop: 16, alignItems: 'center' }}>
                            <h3 style={{ color: '#555', width: 100 }}>Itchiness:</h3>&nbsp;
                            <MyRater interactive={false} rating={painSpot.ratings.itchiness} />
                        </div>
                    </Fade>
                    <Fade in timeout={600}>
                        <div style={{ display: 'flex', marginTop: 16, alignItems: 'center' }}>
                            <h3 style={{ color: '#555', width: 100 }}>Swelling:</h3>&nbsp;
                            <MyRater interactive={false} rating={painSpot.ratings.swelling} />
                        </div>
                    </Fade>
                </div>
            );
        }
        return <h2>No Ratings to display</h2>;
    };

    renderImage = () => {
        const { painSpot } = this.props.location.state;
        if (painSpot.imgUrl) {
            return (
                <div >
                    <h3 style={{ color: '#555', marginTop: 16, width: 100 }}>Image:</h3>&nbsp;
                    <Img src={painSpot.imgUrl} loader={<div style={{ display : 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 260 }}><GridLoader color='rgb(255, 91, 91)'  /></div>} style={{ width: '100%', height: 'auto' }} />
                </div>
            );
        }
        return (
            <div />
        );
    };

    renderBody = () => {
        const { painSpot } = this.props.location.state;
        console.log('painspot', painSpot);
        return (
            <ScrollView>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Fade in timeout={200}>
                        <h2 style={{ marginTop: 8, fontWeight: 700 }}>Information</h2>
                    </Fade>

                    <Fade in timeout={300}>
                        <div style={{ display: 'flex' }}>
                            <h3 style={{ color: '#555', marginTop: 16, width: 100 }}>Note:</h3>&nbsp;
                            <h3 style={{ color: '#555', marginTop: 16, fontWeight: 300 }}>{painSpot.note}</h3>
                        </div>
                    </Fade>
                    {this.renderRatings()}
                    {this.renderImage()}
                </div>
            </ScrollView>
        );
    };

    render() {
        return (
            <div style={styles.container}>
                <TopBar/>
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

export default PainspotPage;
