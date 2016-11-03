import React, { Component } from 'react';
import './statusbar.css';

class StatusBar extends Component {
  render() {
    return (
      <table className="status-bar">
        <tbody>
          <tr>
            <td>
              Pasta:
            </td>
            <td>
              <b>{this.props.currentIngredients.pasta}</b>
            </td>
          </tr>
          <tr>
            <td>
              Liquid:
            </td>
            <td>
              <b>{this.props.currentIngredients.liquid}</b>
            </td>
          </tr>
          <tr>
            <td>
              Base:
            </td>
            <td>            
              <b>{this.props.currentIngredients.base}</b>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default StatusBar;
