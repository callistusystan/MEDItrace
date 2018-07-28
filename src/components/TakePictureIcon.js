import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

export const TakePictureIcon = withStyles({
  enabled: {
    fill: 'rgba(0, 0, 0, 0.87)'
  },
  disabled: {
    fill: 'rgba(220, 0, 220, 0.87)'
  }
})(({ classes, disabled=false }) => {
  const fillClass = classNames(disabled ? classes.disabled : classes.enabled);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path className={ fillClass } d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90.5A40.5,40.5,0,1,1,90.5,50,40.5,40.5,0,0,1,50,90.5Z" />
      <circle className={ fillClass } cx="50" cy="50" r="37.5" />
    </svg>
  );
});