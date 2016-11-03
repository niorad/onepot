import React, { Component } from 'react';
import Selector from './selector';
import StatusBar from './statusbar';
import './app.css';
import state from './state';


class App extends Component {

  constructor(props) {
    super(props);
    this.setCurrentIngredient = this.setCurrentIngredient.bind(this);
    this.state = state;
  }

  setCurrentIngredient(type, newCurrent) {
    this.setState({current: {...this.state.current, [type]: newCurrent}});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>One Pot Pasta Wizard</h1>
          {
            Object.keys(this.state.ingredients).map(key => (
              <div key={key}>
                <Selector 
                  name={key} 
                  ingredients={this.state.ingredients[key].products}
                  setCurrentIngredient={this.setCurrentIngredient}
                  currentIngredient={this.state.current[key]}
                />
              </div>
            ))
          }
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
