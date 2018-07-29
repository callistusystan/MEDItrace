import React, { Component } from 'react';
import MobileHackathon from './components/react-mobile-hackathon';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BodyPage from './pages/BodyPage';
import SymptomsPage from './pages/SymptomsPage';
import HistoryPage from './pages/HistoryPage';
import ErrorPage from './pages/ErrorPage';
import PainspotPage from './pages/PainspotPage';

class App extends Component {
    render() {
        return (
            <MobileHackathon>
                <Switch>
                    <Route path='/history' component={HistoryPage} />
                    <Route path='/painspot' component={PainspotPage} />
                    <Route path='/new' component={BodyPage} />
                    <Route path='/symptoms' component={SymptomsPage} />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/' component={ErrorPage} />
                </Switch>
            </MobileHackathon>
        );
    }
}

export default App;