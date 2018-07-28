import React from 'react';

import { Typography, withStyles } from '@material-ui/core';

export const FormContent = withStyles({
  container: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column'
  }
})(({ children, title, classes }) => (
  <div className={classes.container}>
    <h1>{ title }</h1>
    { children }
  </div>
))

