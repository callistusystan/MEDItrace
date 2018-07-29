import React, { Component } from 'react';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { PulseLoader } from 'react-spinners';
import Fade from '@material-ui/core/Fade';
import TopBar from '../components/TopBar';
import { Link } from 'react-router-dom';
import Kitty from '../images/kitty.png';
import BottomBar from '../components/BottomBar';

class ErrorPage extends Component {

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
            <ScrollView style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={Kitty} style={{ width: 150, height: 150 }}/>

                <Fade in mountOnEnter unmountOnExit>
                    <h1 style={{ color: 'red', textAlign: 'center' }}>404: Page not found!</h1>
                </Fade>

                <Fade in mountOnEnter unmountOnExit timeout={500}>
                    <div>
                        <p style={{ marginTop: 16, textAlign: 'center' }}>Oh no! It appears that this page has not
                            been implemented yet!</p>

                        <p style={{ color: '#555', marginTop: 32, textAlign: 'center' }}>Click <Link to='/' style={{ color: '#0074D9' }}>here</Link> to return to homepage
                        </p>
                    </div>
                </Fade>
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

export default ErrorPage;
