import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class EventForm extends React.Component {
  

  class TextFields extends React.Component {
  };
  

  render() {
    <div>
      <form method="POST" action={this.props.endpoint}>
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue=""
          className="Name"
          margin="normal"
        />
      </form>
    </div>
}

EventForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default EventForm;