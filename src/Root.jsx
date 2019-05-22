import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/features/promise';
import 'core-js/features/array/find';
import 'core-js/features/object/assign';
import 'core-js/features/string/includes';
import Router from './router/Router.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

// const styles = {
//   root: {
//     fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
//     // backgroundColor: '#F0F0F0',
//   },
// };

class Root extends React.Component {
  render() {
    return (
      <>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Router />
        </MuiThemeProvider>
      </>
    );
  }
}

export default Root;
