import React, { Component } from 'react';
import './ingredient_card.css';


class IngredientCard extends Component {
  render() {
    return (
      <li 
        className={"ingredient-card " + (this.props.isActive ? "active" : "no") }
        style={ {backgroundImage: 'url(/foods/' + this.props.name + '.jpg)'} }
      >
        <span>{this.props.name}</span>
      </li>
    );
  }
}

export default IngredientCard;
