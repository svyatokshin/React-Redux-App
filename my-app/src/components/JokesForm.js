import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';
import { Button } from '@material-ui/core';

const JokesForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
        <>
        {props.isFetchingData ? (
            <div>Loading Jokes...</div>
        ) : (
            <Button variant="contained" color="secondary" onClick={handleGetData}>Randomly Generate 10 Jokes</Button>
        )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(JokesForm);
