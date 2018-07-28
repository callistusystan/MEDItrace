import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

class Root extends Component {

    constructor(props) {
        super(props);

        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyBD7tH8YSUnT44VToikRfJRYej1TTdmfhU",
            authDomain: "mediocre-unihack.firebaseapp.com",
            databaseURL: "https://mediocre-unihack.firebaseio.com",
            projectId: "mediocre-unihack",
            storageBucket: "gs://mediocre-unihack.appspot.com",
            messagingSenderId: "521158343926"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Router>
                <App/>
            </Router>
        );
    }
}

export default Root;