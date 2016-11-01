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
          {key: 'red onions'}, 
          {key: 'white onions'}, 
          {key: 'scallots'},
          {key: 'spring onions'}
        ],
      },
      current: {
        pasta: '/none/',
        liquid: '/none/',
        base: '/none/'
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
            currentIngredient={this.state.current.pasta}
          />
          <Selector 
            name="liquid" 
            ingredients={this.state.ingredients.liquid}
            setCurrentIngredient={this.setCurrentIngredient}
            currentIngredient={this.state.current.liquid}
          />
          <Selector 
            name="base" 
            ingredients={this.state.ingredients.base}
            setCurrentIngredient={this.setCurrentIngredient}
            currentIngredient={this.state.current.base}
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
