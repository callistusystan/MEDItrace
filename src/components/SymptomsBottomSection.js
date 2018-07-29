import React from 'react';

import { withStyles, Button } from '@material-ui/core';

// TODO: Could probably think of a better name
export const SymptomsBottomSection = withStyles({
  bottomSection: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
}, { withTheme: true })(({ nextButtonText = 'Next', classes, onNext }) => (
  <div className={classes.bottomSection}>
    <Button color="primary" onClick={onNext}>{nextButtonText}</Button>
  </div>
));