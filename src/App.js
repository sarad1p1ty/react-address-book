import React, {Component} from 'react';
import {Paper, Grid} from '@material-ui/core';
import './App.css';
import Form from './components/Form.js';

class App extends Component {
    render() {
        return (<div className="App">
            <Grid
                lg="9"
                md="9"
                justify="center"
                container="true">
                <Paper>
                    <Form/>
                </Paper>
            </Grid>
        </div>);
    }
}

export default App;
