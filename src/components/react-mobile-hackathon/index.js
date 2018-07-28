import React, { Component } from 'react';
import IPhoneX from './devices/IPhoneX';
import { QRCode } from 'react-qr-svg';

let is_safari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
let is_chrome = /Chrome|CriOS/.test(navigator.userAgent);
is_safari = is_safari && ! is_chrome;

class MobileHackathon extends Component {

    render() {
        return (
            <div
                className='react-app-container'
                style={{
                    width: '100%',
                    height: is_safari ? 'calc(100vh - 72px)' : '100vh',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <IPhoneX>
                    {this.props.children}
                </IPhoneX>
                <div
                    className='react-app-link-container'
                    style={{
                        marginLeft: '8%',
                        backgroundColor: '#FFF',
                        borderRadius: 20,
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                        width: 400,
                        display: 'none',
                        flexDirection: 'column',
                        padding: 16
                    }}
                >
                    <h1 style={{ fontSize: 40 }}>{this.props.appName || 'React App'}</h1>
                    <p style={{ fontSize: 28, color: '#555' }}>Try it out!</p>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{
                            marginTop: 16,
                            width: 256,
                            alignSelf: 'center'
                        }}
                        value={this.props.url || 'http://localhost:3000/'}
                    />
                    <a href={this.props.url || 'http://localhost:3000/'} style={{ fontSize: 24, letterSpacing: 2, color: '#007BFF', marginTop: 16, alignSelf: 'center' }}>{this.props.displayUrl || 'react-app.com'}</a>
                </div>
            </div>
        );
    }
}

export default MobileHackathon;