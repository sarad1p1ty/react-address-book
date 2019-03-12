import React, {Component} from 'react';
import {TextField, Button, FormControl} from '@material-ui/core';

class Form extends Component {
    handleChange () {

    };
    initialState (){};
    render() {
        return (
            <form autocomplete="off" onSubmit={e=>e.preventDefault}>
                <TextField
                    fullWidth="true"
                    id="contact_name"
                    label="Name"
                    type="text"
                    //value={this.state.name}
                    //onChange={this.handleChange('name')}
                />
                <TextField
                    fullWidth="true"
                    label="Address Line 1"
                    id="contact_add1"
                    type="text"
                />
                <TextField
                    fullWidth="true"
                    label="Address Line 2"
                    id="contact_add2"
                    type="text"
                />
                <TextField
                    fullWidth="true"
                    label="Town/City"
                    id="contact_town"
                    type="text"
                />
                <TextField
                    fullWidth="true"
                    label="Country"
                    id="contact_country"
                    type="text"
                />
                <TextField
                    fullWidth="true"
                    label="Postcode"
                    id="contact_postcode"
                    type="text"
                />
                <TextField
                    fullWidth="true"
                    label="Telephone"
                    id="contact_tel"
                    type="tel"
                />
                <TextField
                    fullWidth="true"
                    label="Email"
                    id="contact_email"
                    type="email"
                />
                    <FormControl margin="normal">
                        <Button
                            type="submit"
                            id="contact_submit"
                            color="primary"
                            variant="contained"
                        >
                        Submit
                    </Button>
                </FormControl>
            </form>
        )
    }
}

export default Form;
