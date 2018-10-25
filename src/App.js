import React, {Component} from 'react';
import {Paper, Grid} from '@material-ui/core';
import './App.css';
import Form from './components/Form.js';

const styles = theme => ({
    root: {
    }
});

class App extends Component {
    render() {
        return <div className="App">
            <Grid container="true" justify="center">
              <Grid lg="9" md="9" container="true">
                <Paper>
                  <Form />
                </Paper>
              </Grid>
            </Grid>
          </div>;
    }
}

export default App;
