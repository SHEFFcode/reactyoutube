import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component. It should produce some html.
const App = () => {
  return (
    <div>Hi!</div>
  )
};
//Take this component and put it into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));