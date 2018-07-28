import React, { Component } from 'react';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { PulseLoader } from 'react-spinners';
import { Fade } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Anatomy from "../components/anatomy/Anatomy"
import BottomBar from '../components/BottomBar';
import { Slider } from 'antd';

const marks = {
    0: 'Apr',
    1: 'May',
    2: 'Jun',
    3: 'Jul'
};

const painSpots = {
    Apr: [
        {x: 28.015625, y: 182.5, layer: 1, note: 'Rash'},
        {x: 161.015625, y: 195.5, layer: 1, note: 'Rash'},
        {x: 44.015625, y: 97.5, layer: 2, note: 'Shoulder ache'},
        {x: 106.015625, y: 0.5, layer: 7, note: 'Headache'},
        {x: 74.015625, y: 7.5, layer: 7, note: 'Headache'}
    ],
    May: [
        {x: 13.015625, y: 189.5, layer: 1, note: 'Rash'},
        {x: 158.015625, y: 180.5, layer: 1, note: 'Rash'},
        {x: 136.015625, y: 440.5, layer: 2, note: 'Leg cramp'},
        {x: 156.015625, y: 154.5, layer: 2, note: 'Leg cramp'},
        {x: 96.015625, y: -1.5, layer: 7, note: 'Headache'}
    ],
    Jun: [
        {x: 83.015625, y: 13.5, layer: 7, note: 'Headache'},
        {x: 155.015625, y: 155.5, layer: 2, note: 'Leg cramp'}
    ],
    Jul: [
        {x: 13.015625, y: 189.5, layer: 1, note: 'Rash'},
        {x: 158.015625, y: 180.5, layer: 1, note: 'Rash'},
        {x: 106.015625, y: 15.5, layer: 7, note: 'Headache'},
        {x: 106.015625, y: 0.5, layer: 7, note: 'Headache'},
        {x: 57.015625, y: 441.5, layer: 2, note: 'Leg cramp'},
        {x: 156.015625, y: 154.5, layer: 2, note: 'Leg cramp'},
    ]
};

class HistoryPage extends Component {

    state = {
        ready: false,
        month: 'Apr'
    };

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 20);
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
                        <h2 style={{ color: '#555' }}>Health History</h2>
                    </Fade>
                    <Anatomy month={this.state.month} painSpots={painSpots} timeline={this.renderTimeline()} />
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

export default HistoryPage;
