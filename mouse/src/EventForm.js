import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class EventForm extends React.Component {

constructor() {
     super();
     this.state = {id: 1};
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleSubmit = (event) => {
     //Make a network call somewhere
     event.preventDefault();
  }

  render() {
     return( 
        <form onSubmit={this.handleSubmit}>
          <TextField label="Event Name"  onChange={this.change} />

          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2019-01-01"
            InputLabelProps={{
              shrink: true,
            }}
    />
          <FormControlLabel
          control={
          <Checkbox
            checked={this.state.checkedB}
            onChange={this.handleChange('checkedB')}
            value="checkedB"
            color="primary"
            
        />}
        label="Repeats"
        />
          <button label="Submit" type="submit">Submit</button>
        </form>
     )
  }
}

export default EventForm;