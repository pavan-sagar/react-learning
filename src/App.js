import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import  { HelloWorld }  from './components/HelloWorld';
import { Component } from 'react';
import { store }  from './store/index'

import 'bootstrap/dist/css/bootstrap.min.css';

import { ButtonGroup } from './components/ButtonGroup';


class App extends Component {
  render(){
  return (
    <div className="App">
      <HelloWorld username={store.getState().username} />
      <ButtonGroup members={['Sucheta','Sunny','Kunal','Babbi']} />
      <br />
    </div>
  );
}
}

const Renderer = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

store.subscribe(Renderer);

export default App;
