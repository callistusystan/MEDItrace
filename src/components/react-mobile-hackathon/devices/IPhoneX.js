import React, { Component } from 'react';
import './devices.css';

class IPhoneX extends Component {
    render() {
        return (
            <div className="marvel-device iphone-x">
                <div className="notch">
                    <div className="camera" />
                    <div className="speaker" />
                </div>
                <div className="top-bar" />
                <div className="sleep" />
                <div className="bottom-bar" />
                <div className="volume" />
                <div className="overflow">
                    <div className="shadow shadow--tr" />
                    <div className="shadow shadow--tl" />
                    <div className="shadow shadow--br" />
                    <div className="shadow shadow--bl" />
                </div>
                <div className="inner-shadow" />
                <div className="screen" style={{ height: '100%' }}>
                    <div className="app-container" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default IPhoneX;
