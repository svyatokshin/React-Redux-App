import React from "react";
import { connect } from "react-redux";
import "../components/Joke.css";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { toggleReveal } from "../actions/index";

const useStyles = makeStyles({
  root: {
    border: '2px solid grey',
    margin: '20px 0',
    width: '90%',

  }
});

function Joke(props) {
  const classes = useStyles();
  console.log("this is the joke.js props: ", props);

  return (
        <Card className={classes.root} color="primary">
          <h1>{props.joke.setup}</h1>
          <p className={`joke${props.joke.isRevealed || props.isRevealed ? " completed" : ""}`}>
            {props.joke.punchline}
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.toggleReveal(props.joke.id)}
          >
            Reveal Answer
          </Button>
          <br/>
          <br/>
        </Card>
  );
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData,
    jokes: state.jokes,
    error: state.error,
    isRevealed: state.isRevealed
  };
};

export default connect(mapStateToProps, { toggleReveal })(Joke);
