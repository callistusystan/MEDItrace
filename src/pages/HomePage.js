import React, { Component } from 'react';
import DeviceBar from '../components/react-mobile-hackathon/devices/DeviceBar';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { GridLoader } from 'react-spinners';
import HeartBeat from '../images/heartbeat.png';

class HomePage extends Component {

    state = {
        ready: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 2000);
    }

    renderLoading = () => {
        return (
            <LoadingView>
                <GridLoader color='rgb(255, 91, 91)' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderBody = () => {
        return (
            <ScrollView style={{ padding: '4px 8px' }}>
                <div style={{ height: '200%', display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ color: '#555' }}>Welcome back, David</h2>
                    <div style={{ flex: 1 }} />
                    <h2 style={{ color: '#555' }}>You've reached the end!</h2>
                </div>
            </ScrollView>
        );
    };

    render() {
        return (
            <div style={styles.container}>
                <DeviceBar
                    title='MEDIocre'
                    logoComponent={
                        <img src={HeartBeat} style={{ position: 'absolute', width: 48, height: 48 }} />
                    }
                    position='top'
                    noBorder
                    isAppBar
                    titleStyle={{
                        color: '#555'
                    }}
                    style={{
                        borderColor: '#DDD'
                    }}
                />
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
        backgroundColor: '#EEE'
    }
};

export default HomePage;
