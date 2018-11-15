import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';


class EventForm extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: '',
      date: '',
      repeats: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { eventName, date, repeats } = this.state;

    axios.post('/api/mice', { eventName, date, repeats });
      
  }

  render() {
    const { eventName, date, repeats } = this.state;
    console.log(eventName + date + repeats);
    return (
      <form onSubmit={this.onSubmit}>
        <TextField label="Event Name" name="eventName" value={eventName} onChange={this.onChange} />

        <TextField
          id="date"
          name="date"
          label="Date"
          type="date"
          value={date}
          defaultValue="2019-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.onChange}
        />
        <FormControlLabel
          control={(
            <Checkbox
              value={repeats}
              name="repeats"
              onChange={this.handleChange('checkedB')}
              color="primary"
            />
)}
          label="Repeats"
        />
        <button label="Submit" type="submit">Submit</button>
      </form>
    );
  }
}

export default EventForm;
