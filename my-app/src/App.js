import React from 'react';
import './App.css';
import JokesForm from './components/JokesForm';
import { createStore, applyMiddleware } from 'redux';
import { jokesReducer as reducer } from './reducers/jokesReducer';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import JokesList from './components/JokesList';

const store = createStore(reducer, applyMiddleware(thunk));


export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Random Joke Generator!</h1>
        <JokesForm />
        <JokesList />
      </div>
    </Provider>
  );
}
