import React from 'react';
import ReactDOM from 'react-dom';
import Props from './components/Props';
// import Hello from './components/Hello'
// import Card from './components/Card'

// function component

// function HelloWorld() {
//   return (
//     <h1>This is my first component </h1>
//   )
// }

// class component

// class HelloWorld extends React.Component{
//   render() {
//     return (
//       <h1>this is a class component.</h1>

//     )
//   }
// }


ReactDOM.render(<Props name="Molly" age={4} /> ,document.getElementById('root'));


