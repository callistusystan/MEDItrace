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
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
};

class HistoryPage extends Component {

    state = {
        ready: false
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
            <Slider marks={{ 0: 'Jan', 1: '', 2: '', 3: '', 4: '', 5: '', 6: 'Jul' }}
                    min={0}
                    max={6}
                    default={0}
                    tipFormatter={i => marks[i]}
                    style={{ minWidth: 180, width: 180 }} />
        );
    };

    renderBody = () => {
        return (
            <ScrollView>
                <div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <Fade in={200}>
                        <h2 style={{ color: '#555' }}>Health History</h2>
                    </Fade>
                    <Anatomy timeline={this.renderTimeline()} />
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
