import React, { Component } from 'react';

import { MyRater } from './MyRater';
import { FormContent } from './FormContent';

import {   
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  withStyles,
  Typography
} from '@material-ui/core';

const RatingControl = ({ id, children, onRate, ...other }) => (
  <div>
    <Typography>{children}</Typography>
    <MyRater id={id} onRate={onRate} />
  </div>
);

export const SymptomsRatingForm = withStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
})(({ classes }) => (
  <form class={classes.container}>
    <FormContent title="Symptoms">
      <RatingControl>Pain</RatingControl>
      <RatingControl>Itchiness</RatingControl>
      <RatingControl>Swelling</RatingControl>
      <RatingControl>Pain</RatingControl>
    </FormContent>
  </form>
))