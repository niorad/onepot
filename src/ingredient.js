import React, { Component } from 'react';
import './ingredient.css';


class Ingredient extends Component {
  render() {
    return (
      <li 
        className="Ingredient" 
        onClick={ () => this.props.onIngredientSelected(this.props.name) }
      >
        <img alt="Food" src="http://lorempixel.com/50/50/food/" />
        {this.props.name}
      </li>
    );
  }
}

export default Ingredient;
