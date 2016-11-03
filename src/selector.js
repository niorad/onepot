import React, { Component } from 'react';
import IngredientCard from './ingredient_card';
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
      <div className="selector-container">
        <h2>{this.props.name}</h2>
        <ul className="Selector">
          {
            this.props.ingredients.map(item => (
              <div
                onClick={() => this.onIngredientSelected(item.key)}
                key={item.key}
              >
                <IngredientCard 
                  name={item.key} 
                  key={item.key}
                  isActive={ this.props.currentIngredient === item.key }
                  onIngredientSelected={this.onIngredientSelected}
                />
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Selector;
