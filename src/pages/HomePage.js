import React, { Component } from 'react';
import DeviceBar from '../components/react-mobile-hackathon/devices/DeviceBar';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { PulseLoader } from 'react-spinners';
import { Fade } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Doctor from '../images/doctor.png';
import Stethoscope from '../images/stethoscope.png';

class HomePage extends Component {

    state = {
        ready: false
    };

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

    renderBody = () => {
        return (
            <ScrollView style={{ padding: '8px 16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Fade in timeout={200}>
                        <h2>Welcome back, David</h2>
                    </Fade>

                    <Fade in timeout={300}>
                        <h3 style={{ color: '#555', marginTop: 16 }}>What would you like to do today?</h3>
                    </Fade>
                    <Fade in timeout={600}>
                        <div>
                            <Card to='/new' img={Stethoscope} style={{ backgroundColor: '#2980b9', marginTop: 16 }}>Record
                                New Symptom</Card>
                        </div>
                    </Fade>
                    <Fade in timeout={800}>
                        <div>
                            <Card to='/history' style={{ marginTop: 16 }}>Health History</Card>
                        </div>
                    </Fade>
                    <Fade in timeout={1000}>
                        <div>
                            <Card to='/doctor' img={Doctor} style={{ backgroundColor: '#27ae60', marginTop: 16 }}>
                                Find a Doctor
                            </Card>
                        </div>
                    </Fade>
                </div>
            </ScrollView>
        );
    };

    render() {
        return (
            <div style={styles.container}>
                <TopBar/>
                {this.state.ready ? this.renderBody() : this.renderLoading()}
                <DeviceBar
                    title='Bottom Bar'
                    position='bottom'
                    titleStyle={{
                        color: '#555'
                    }}
                    style={{
                        borderColor: '#DDD'
                    }}
                />
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

export default HomePage;
