import React, { Component } from 'react';

import { SymptomsBottomSection } from './SymptomsBottomSection';
import { MyRater } from './MyRater';
import { FormContent } from './FormContent';

import {   
  withStyles,
} from '@material-ui/core';

const RatingControl = ({ id, children, onRate, ...other }) => (
  <div>
    <h2>{children}</h2>
    <MyRater id={id} onRate={onRate} />
  </div>
);

export const SymptomsRatingForm = withStyles({
  bottomSection: {
    display: 'flex'
  }
})(class extends Component {
  constructor() {
    super();
    this.state = {
      pain: 0,
      itchiness: 0,
      swelling: 0
    }
  }

  onRatePain = (pain) => {
    this.setState({
      pain,
    });
  }

  onRateItchiness = (itchiness) => {
    this.setState({
      itchiness
    });
  }

  onRateSwelling = (swelling) => {
    this.setState({
      swelling
    });
  }

  onNext = () => {
    this.props.onNext(this.state);
  }

  render() {
    return (
      <form>
        <FormContent title="Symptoms">
          <RatingControl rating={this.state.pain} onRate={this.onRatePain}>Pain</RatingControl>
          <RatingControl rating={this.state.itchiness} onRate={this.onRateItchiness}>Itchiness</RatingControl>
          <RatingControl rating={this.state.swelling} onRate={this.onRateSwelling}>Swelling</RatingControl>
          <SymptomsBottomSection onNext={this.onNext}/>
        </FormContent>
      </form>
    )
  }
});