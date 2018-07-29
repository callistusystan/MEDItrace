import React, {Component} from 'react';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import {PulseLoader} from 'react-spinners';
import {Fade} from '@material-ui/core';
import TopBar from '../components/TopBar';
import {Link} from 'react-router-dom';
import FakeMap from '../images/fakeMap.png';
import BottomBar from '../components/BottomBar';

class DoctorPage extends Component {

    state = {
        ready: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ready: true}), 500);
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
            <ScrollView style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Fade in mountOnEnter unmountOnExit>
                    <h2 style={{ marginBottom: 16 }}>Doctors Near You</h2>
                </Fade>
                <Fade in mountOnEnter unmountOnExit timeout={500}>
                    <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <div
                            style={{
                                width: "90%",
                                height: 300,
                                background: `url(${FakeMap})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >

                        </div>
                        <div style={{width: 310,margin:10,border:"1px solid #eeeeee"}}>
                            <div style={{fontWeight: 600}}>
                                Dr Feng Yang
                            </div>
                            <div>
                                43 m · 68 Lonsdale St
                            </div>
                            <div>
                                (03) 9639 9600
                            </div>
                            <div>
                                <span style={{color: "rgb(255, 91, 91)"}}>Closed</span> ⋅ Opens 8:30AM Mon.
                            </div>
                        </div>
                        <div style={{width: 310,margin:10,border:"1px solid #eeeeee"}}>
                            <div style={{fontWeight: 600}}>
                                Dr Irene Wong
                            </div>
                            <div>
                                170.0 m · 28/131 Lonsdale St
                            </div>
                            <div>
                                (03) 9663 7222
                            </div>
                            <div>
                                <span style={{color: "#259790"}}>Open</span> ⋅ Opens 8:30AM Mon.
                            </div>
                        </div>
                        <div style={{width: 310,margin:10,border:"1px solid #eeeeee"}}>
                            <div style={{fontWeight: 600}}>
                                Dr Leong David
                            </div>
                            <div>
                                500.0 m · Suite 420/100 Victoria Parade
                            </div>
                            <div>
                                (03) 9639 7745
                            </div>
                            <div>
                                <span style={{color: "#259790"}}>Open</span> ⋅ Opens 8:30AM Mon.
                            </div>
                        </div>
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

export default DoctorPage;
