import React, { Component } from 'react';
import './statusbar.css';

class StatusBar extends Component {
  render() {
    return (
      <div className="status-bar">
        Pasta: <b>{this.props.currentIngredients.pasta}</b>
        <br />
        Liquid: <b>{this.props.currentIngredients.liquid}</b>
        <br />
        Base: <b>{this.props.currentIngredients.base}</b>
      </div>
    );
  }
}

export default StatusBar;
