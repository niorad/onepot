import React, { Component } from 'react';
import Selector from './selector';
import StatusBar from './statusbar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.setCurrentIngredient = this.setCurrentIngredient.bind(this);
    this.state = {
      ingredients: {
        pasta: [
          {key: 'tagliatelle'}, 
          {key: 'spaghetti'}, 
          {key: 'farfalle'}, 
          {key: 'fusili'}
        ],
        liquid: [
          {key: 'broth'}, 
          {key: 'soya'}, 
          {key: 'tomato'}
        ],
        base: [
          'onions', 'spring-onions', 'ginger'
        ],
      },
      current: {
        pasta: '/none/',
        liquid: '/none/'
      }
    }
  }

  setCurrentIngredient(type, newCurrent) {
    this.setState({current: {...this.state.current, [type]: newCurrent}});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>OPP</h2>
          <Selector 
            name="pasta" 
            ingredients={this.state.ingredients.pasta}
            setCurrentIngredient={this.setCurrentIngredient}
          />
          <Selector 
            name="liquid" 
            ingredients={this.state.ingredients.liquid}
            setCurrentIngredient={this.setCurrentIngredient}
          />
        </div>
        <div className="App-status">
          <StatusBar 
            currentIngredients={this.state.current} 
          />
        </div>
      </div>
    );
  }
}

export default App;
