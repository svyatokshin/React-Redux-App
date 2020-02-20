import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Joke from "./Joke";
import { toggleReveal } from "../actions/index";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
      margin:'0 auto',
    width: "350px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
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
            onClick={() => props.toggleReveal()}
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
