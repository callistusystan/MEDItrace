import React, { Component } from 'react';
import DeviceBar from '../components/react-mobile-hackathon/devices/DeviceBar';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { GridLoader } from 'react-spinners';
import Background from '../images/background.jpg';

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
                <GridLoader color='#ffb432' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderBody = () => {
        return (
            <ScrollView isDark>
                <div style={{ height: '200%', display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ color: 'rgb(250, 250, 255)' }}>React App</h1>
                    <div style={{ flex: 1 }} />
                    <h2 style={{ color: 'rgb(250, 250, 255)' }}>You've reached the end!</h2>
                </div>
            </ScrollView>
        );
    };

    render() {
        return (
            <div style={styles.container}>
                <DeviceBar
                    title='React App'
                    position='top'
                    noBorder
                    isAppBar
                    titleStyle={{
                        color: 'rgb(250, 250, 255)'
                    }}
                    style={{
                        borderColor: 'rgba(255, 255, 255, .2)'
                    }}
                />
                {this.state.ready ? this.renderBody() : this.renderLoading()}
                <DeviceBar
                    title='Bottom Bar'
                    position='bottom'
                    titleStyle={{
                        color: 'rgb(250, 250, 255)'
                    }}
                    style={{
                        borderColor: 'rgba(255, 255, 255, .2)'
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
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    }
};

export default HomePage;
