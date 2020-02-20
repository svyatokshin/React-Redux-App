import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_JOKES = 'UPDATE_JOKES';
export const SET_ERROR = 'SET_ERROR';
export const TOGGLE_REVEAL = 'TOGGLE_REVEAL';
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get("https://official-joke-api.appspot.com/random_ten")
        .then(res => {
            console.log("this is the .then response: ", res);
            dispatch({ type: UPDATE_JOKES, payload: res.data });
        })
        .catch(err => {
            console.error('error fetching data from api, err: ', err);
            dispatch({ type: SET_ERROR, payload: "Error fetching data from api" })
        });
};
export const toggleReveal = (id) => dispatch => {
    dispatch({ type: TOGGLE_REVEAL, payload: id });

}