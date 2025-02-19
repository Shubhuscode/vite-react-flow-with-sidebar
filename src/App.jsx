// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Workflow from './components/Workflow';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Grid, Paper } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper style={{ padding: 20 }}>
            <Sidebar />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ padding: 20 }}>
            <Workflow />
          </Paper>
        </Grid>
      </Grid>
    </Provider>
  );
};

export default App;
