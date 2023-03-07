/** 
 * View class to display a game grid. Note this should purely serve for rendering purposes with toggling capabilities
 * 
 * @author Lachlan Charteris
 * @module js/games/Grid
 */

import React from 'react';
import GameConstants from '../constants/GameConstants';

import './css/gamestyle.css';

class Grid extends React.Component {
  render() {
    return (
      <div className="grid" style={this.props.overloads}>
        {this.props.matrix.map((row, rowIndex) =>
          <div className="grid-row">
            {row.map((cell, index) =>
              <button 
                className="grid-cell" 
                onClick={() => {
                  if (typeof this.props.toggle === 'function') {
                    this.props.toggle(rowIndex, index);
                  }
                }} 
                style={{
                  background: this.props.cellMap[cell] ?? GameConstants.COLORS.ACTIVE,
                  width: this.props.cellWidth,
                  height: this.props.cellHeight,
                }}
              ></button>
            )}
          </div>
        )}
      </div>
    );
  }
}

Grid.defaultProps = {
  matrix: Array(GameConstants.DEFAULT_MATRIX_SIZE).fill(0).map(() => 
    Array(GameConstants.DEFAULT_MATRIX_SIZE).fill(1)),
  width: GameConstants.DEFAULT_MATRIX_SIZE,
  height: GameConstants.DEFAULT_MATRIX_SIZE,
  cellWidth: GameConstants.DEFAULT_CELL_WIDTH,
  cellHeight: GameConstants.DEFAULT_CELL_HEIGHT,
  cellMap: GameConstants.DEFAULT_CELL_MAP,
  maxCellValue: 1,
  overloads: {},
}

export default Grid;