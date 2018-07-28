import React, { Component } from 'react';
import DeviceBar from './react-mobile-hackathon/devices/DeviceBar';

class BottomBar extends Component {
    render() {
        return (
            <DeviceBar
                position='bottom'
                titleStyle={{
                    color: '#555'
                }}
                style={{
                    borderColor: '#DDD',
                    height: 50
                }}
            >
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', letterSpacing: 1 }}>
                    <span style={{ fontWeight: 700 }}>DISCLAIMER: </span>
                    &nbsp;
                    <span>Consult your local doctor</span>
                </div>
            </DeviceBar>
        );
    }
}

export default BottomBar;
