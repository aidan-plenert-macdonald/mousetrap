import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 300,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacing: '16',
    };
  }

  handleChange(key) {
    return (event, value) => {
      this.setState({
        [key]: value,
      });
    };
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Panel.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default withStyles(styles)(Panel);
