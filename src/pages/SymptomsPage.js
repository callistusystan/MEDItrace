import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import firebase from 'firebase';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import { SymptomsRatingForm } from '../components/SymptomsRatingForm';
import { SymptomsExtraForm } from '../components/SymptomsExtraForm';

export default class SymptomsPage extends Component { 
  constructor() {
    super();
    this.state = {
      ratings: {
        
      },
      extras: {
        
      }
    }
  }

  onRatingPageNext = (data) => {
    this.setState({
      ratings: data
    });
    return this.props.history.push(`${this.props.match.url}/extras`);
  }

  onExtraPageNext = (data) => {
    this.setState({
      extras: data
    });
    // TODO: Check if this is right
    return this.props.history.push('/new');
  }

  uploadSymptomData = () => {

  }

  render() {
    return (
      <div>
        <TopBar />
        <Switch>
          <Route exact path={`${this.props.match.url}/`} render={() => <Redirect to={`${this.props.match.url}/rate`}/>}/>
          <Route path={`${this.props.match.url}/rate`} render={() => (
              <SymptomsRatingForm onNext={this.onRatingPageNext}/>
          )}/>
          <Route path={`${this.props.match.url}/extras`} render={() =>(
            <SymptomsExtraForm onNext={this.onExtraPageNext}/>
          )}/>
        </Switch>
        <BottomBar/>
      </div>
    );
  }
}
