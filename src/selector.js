import React, { Component } from 'react';
import Ingredient from './ingredient';
import './selector.css';

class Selector extends Component {

  constructor(props) {
    super(props);
    this.onIngredientSelected = this.onIngredientSelected.bind(this);
  }

  onIngredientSelected(name) {
    this.props.setCurrentIngredient(this.props.name, name);

  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul className="Selector">
          {
            this.props.ingredients.map(item => (
              <Ingredient 
                name={item.key} 
                key={item.key}
                isActive={ this.props.currentIngredient === item.key }
                onIngredientSelected={this.onIngredientSelected}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Selector;
