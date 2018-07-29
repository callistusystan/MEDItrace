import React from 'react';
import ReactDOM from 'react-dom';


import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import registerServiceWorker from './RegisterServiceWorker';
import Root from './Root';
import './styles/index.css';
import './styles/antd.css';

ReactDOM.render(
  <MuiThemeProvider theme={createMuiTheme({
    palette: {
        primary: { main: '#ff5b5b', },
        secondary: { main: '#ff5b5b', }
    }
})}>
<Root />
</MuiThemeProvider>

  , document.getElementById('root'));
registerServiceWorker();
