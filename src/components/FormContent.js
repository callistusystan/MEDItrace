import React from 'react';

import { Typography } from '@material-ui/core';

export const FormContent = ({ children, title }) => (
  <div>
    <Typography>{ title }</Typography>
    { children }
  </div>
)

