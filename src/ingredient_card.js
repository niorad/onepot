import React, { Component } from 'react';
import './ingredient_card.css';


class IngredientCard extends Component {
  render() {
    return (
      <li 
        className={"ingredient-card " + (this.props.isActive ? "active" : "no") }
      >
        <span>{this.props.name}</span>
        <img alt="Food" src="http://lorempixel.com/150/180/food/" />
      </li>
    );
  }
}

export default IngredientCard;
