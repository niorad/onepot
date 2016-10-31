import React, { Component } from 'react';
import './statusbar.css';

class StatusBar extends Component {
  render() {
    return (
      <div className="status-bar">
        Pasta: {this.props.currentIngredients.pasta}
        <br />
        Liquid: {this.props.currentIngredients.liquid}
      </div>
    );
  }
}

export default StatusBar;
