import React from 'react';

import { Typography, withStyles } from '@material-ui/core';

export const FormContent = withStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
})(({ children, title, classes }) => (
  <div className={classes.container}>
    <h2 style={{ marginTop: 8, fontWeight: 700 }}>{ title }</h2>
    { children }
  </div>
))

