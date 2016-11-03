import React, { Component } from 'react';
import './statusbar.css';

class StatusBar extends Component {
  render() {
    return (
      <table className="status-bar">
        <tbody>

          {
            Object.keys(this.props.currentIngredients).map(key => (

              <tr>
                <td>
                  {key}:
                </td>
                <td>
                  <b>{this.props.currentIngredients[key]}</b>
                </td>
              </tr>

            ))
          }

        </tbody>
      </table>
    );
  }
}

export default StatusBar;
