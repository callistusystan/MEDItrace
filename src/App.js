import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import MobileHackathon from './components/react-mobile-hackathon';

class App extends Component {
    render() {
        return (
            <MobileHackathon>
                <HomePage />
            </MobileHackathon>
        );
    }
}

export default App;