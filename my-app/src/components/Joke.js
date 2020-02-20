import React from "react";
import { connect } from "react-redux";
import "../components/Joke.css";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: '2px solid grey',
    margin: '3px 0'
  }
});

function Joke(props) {
  const classes = useStyles();
  console.log("this is the joke.js props: ", props);

  return (
    <div>
        <Card className={classes.root} color="primary">
          <h1>{props.joke.setup}</h1>
          <p className={`joke${props.isRevealed ? " completed" : ""}`}>
            {props.joke.punchline}
          </p>
        </Card>
    </div>
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

export default connect(mapStateToProps, {})(Joke);
