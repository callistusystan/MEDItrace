import React from 'react';

import { withStyles, Button } from '@material-ui/core';

// TODO: Could probably think of a better name
export const SymptomsBottomSection = withStyles({
  bottomSection: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
})(({ nextButtonText = 'Next', classes, onNext }) => (
  <div className={classes.bottomSection}>
    <Button onClick={onNext}>{nextButtonText}</Button>
  </div>
));