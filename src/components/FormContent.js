import React from 'react';
import { Fade, withStyles } from '@material-ui/core';

export const FormContent = withStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}, { withTheme: true })(({ children, title, classes }) => (
  <div className={classes.container}>
    <Fade in timeout={200}>
    <h2 style={{ marginTop: 8, fontWeight: 700 }}>{ title }</h2>
    </Fade>
    { children }
  </div>
))

