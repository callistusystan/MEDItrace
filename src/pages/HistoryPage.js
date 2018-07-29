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

const marks = {
    0: 'Apr',
    1: 'May',
    2: 'Jun',
    3: 'Jul'
};

class HistoryPage extends Component {

    constructor(props) {
        super(props);

        console.log('history', this.props.location);

        this.state = {
            ready: false,
            month: 'Apr',
            monthIndex: 0,
            painSpots: { Jul: [] }
        };

        if (this.props.location.state && this.props.location.state.month) {
            this.state.month = 'Jul';
            this.state.monthIndex = 3;
        }
    }


    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 20);

        firebase.database().ref().on('value', ss => {
            console.log('ss', ss.val());
            const { painSpots } = ss.val();
            this.setState({ painSpots });
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
                    value={this.state.monthIndex}
                    defaultValue={this.state.monthIndex}
                    tipFormatter={i => marks[i]}
                    onChange={i => {
                        this.setState({ month: marks[i], monthIndex: i })
                    }}
                    style={{ minWidth: 180, width: 180 }}
            />
        );
    };

    renderBody = () => {
        console.log(this.state.painSpots);
        return (
            <ScrollView>
                <div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Fade in={200}>
                        <h2 style={{ marginTop: 8, fontWeight: 700 }}>Health History</h2>
                    </Fade>
                    <Anatomy month={this.state.month} painSpots={this.state.painSpots} timeline={this.renderTimeline()} />
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
