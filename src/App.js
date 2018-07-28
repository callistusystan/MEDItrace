import React, { Component } from 'react';
import MobileHackathon from './components/react-mobile-hackathon';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BodyPage from './pages/BodyPage';
import { Camera } from './components/Camera';

class App extends Component {
    render() {
        return (
            <MobileHackathon>
                <Switch>
                    <Route path='/new' component={BodyPage} />
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </MobileHackathon>
        );
    }
}

export default App;