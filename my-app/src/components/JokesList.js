import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Joke from "./Joke";
import { toggleReveal } from "../actions/index";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles({
  root: {
      margin:'10px auto',
    width: "60%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: "center",
    background: '#0C1D51'
    
  }
});

const JokesList = props => {
  const classes = useStyles();
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.toggleReveal('all')}
          >
            Click To Reveal All Answers 
          </Button>
          <Card className={classes.root}>
            {props.jokes.map(joke => (
                  <Joke key={joke.id} joke={joke} /> 
            ))}
          </Card>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    jokes: state.jokes,
    error: state.error
  };
};

export default connect(mapStateToProps, { toggleReveal })(JokesList);
