import React, { Component } from 'react';
import { SymptomsRatingForm } from '../components/SymptomsRatingForm';

export default class SymptomsPage extends Component { 
  render() {
    return (
      <div>
        <TopBar />
        <SymptomsRatingform/>
        <DeviceBar
            title='Bottom Bar'
            position='bottom'
            titleStyle={{
                color: '#555'
            }}
            style={{
                borderColor: '#EEE'
            }}
        />
      </div>
    );
  }
}
