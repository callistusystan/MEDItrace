import React, { Component } from 'react';
import IPhoneX from './devices/IPhoneX';
import QRCode from "../../images/qr-code.png"
import Logo from '../Logo';

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
                    <Logo mediStyle={{ fontSize: 40 }} traceStyle={{ fontSize: 40 }} style={{ margin: undefined }} />
                    <p style={{ fontSize: 28, color: '#555', marginTop: 8 }}>Try it out!</p>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div><img src={QRCode} style={{width:400,height:400}}/></div>
                    </div>
                    <a href={this.props.url || 'http://localhost:3000/'} style={{ fontSize: 14, letterSpacing: 2, color: '#007BFF', marginTop: 16, alignSelf: 'center' }}>{this.props.displayUrl || 'mediocre-unihack.firebaseapp.com'}</a>
                </div>
            </div>
        );
    }
}

export default MobileHackathon;