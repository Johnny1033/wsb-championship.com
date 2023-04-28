// src/leaderboard.js
import React from 'react';
import './leaderboard.css';

class Leaderboard extends React.Component {
  render() {
    const { scores } = this.props;
    return (
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X</td>
              <td>{scores.X}</td>
            </tr>
            <tr>
              <td>O</td>
              <td>{scores.O}</td>
            </tr>
            <tr>
              <td>Draws</td>
              <td>{scores.draws}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
