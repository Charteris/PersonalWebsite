/**
 * View class to display a game grid. Note this should purely serve for rendering purposes with toggling capabilities
 *
 * @author Lachlan Charteris
 * @module js/games/Grid
 */

import React from 'react';
import PropTypes from 'prop-types';

import GameConstants from '../constants/GameConstants';
import './css/gamestyle.css';

class Grid extends React.Component {
  /**
   * @inheritdoc
   */
  render() {
    const getCellStyling = (cell) => ({
      className: 'grid-cell',
      style: {
        background: this.props.cellMap[cell] ?? GameConstants.COLORS.ACTIVE,
        width: this.props.cellWidth,
        height: this.props.cellHeight,
      },
    });

    return (
      <div className="grid" style={this.props.overloads}>
        {this.props.matrix.map((row, rowIndex) => (
          <div className="grid-row">
            {row.map((cell, index) =>
              this.props.disabled ? (
                <div {...getCellStyling(cell)}></div>
              ) : (
                <button
                  onClick={() => this.props.onClick(rowIndex, index)}
                  {...getCellStyling(cell)}
                ></button>
              ),
            )}
          </div>
        ))}
      </div>
    );
  }
}

Grid.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  width: PropTypes.number,
  height: PropTypes.number,
  cellWidth: PropTypes.number,
  cellHeight: PropTypes.number,
  cellMap: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  maxCellValue: PropTypes.number,
  overloads: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Grid.defaultProps = {
  matrix: Array(GameConstants.DEFAULT_MATRIX_SIZE)
    .fill(0)
    .map(() => Array(GameConstants.DEFAULT_MATRIX_SIZE).fill(1)),
  width: GameConstants.DEFAULT_MATRIX_SIZE,
  height: GameConstants.DEFAULT_MATRIX_SIZE,
  cellWidth: GameConstants.DEFAULT_CELL_WIDTH,
  cellHeight: GameConstants.DEFAULT_CELL_HEIGHT,
  cellMap: GameConstants.DEFAULT_CELL_MAP,
  maxCellValue: 1,
  overloads: {},
  onClick: () => console.log('Clicked'),
  disabled: false,
};

export default Grid;
