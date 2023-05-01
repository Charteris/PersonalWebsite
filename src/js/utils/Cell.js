/** 
 * General cell object to be called for 
 * 
 * @author Lachlan Charteris
 * @module js/utils/Cell
 */

import React from 'react';
import CellConstants from '../constants/CellConstants';
import './css/cell.css';

/**
 * Returns a new button object with the relevant information
 * @param {Object} cellInfo - relevant display and callback information for the button 
 * @returns {React.Element}
 */
function createButton(cellInfo) {
  return (
    <button className={cellInfo.cellType} onMouseUp={cellInfo.callback} 
      style={cellInfo.styleOverloads} {...cellInfo.overloads} 
    >
      {cellInfo.title}
    </button>
  );
}

/**
 * Returns a new input object with the relevant information
 * @param {Object} cellInfo - relevant display and callback information for the input
 * @returns {React.Element}
 */
function createInput(cellInfo) {
  return <div>
    <div className="input-title">{cellInfo.title}</div>
    <input className={cellInfo.cellType} onKeyDown={cellInfo.callback} 
      style={cellInfo.styleOverloads} {...cellInfo.overloads} 
    >
    </input>
  </div>;
}

/**
 * Returns a new empty div object with the relevant class style
 * @param {Object} cellInfo - relevant class style information
 * @returns {React.Element}
 */
function createEmptyCell(cellInfo) {
  return (
    <div className={cellInfo.cellType} onChange={cellInfo.callback} 
      style={cellInfo.styleOverloads} {...cellInfo.overloads} 
    >
      Empty Cell
    </div>
  );
}

class Cell extends React.Component {
  /**
   * @inheritdoc
   */
  constructor(props) {
    super(props);
    this.state = { loaded: false }
    this.renderFunction = createEmptyCell;
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    // Set appropriate render function
    if (Object.values(CellConstants.BUTTONS).includes(this.props.cellType)) {
      this.renderFunction = createButton;
    } else if (Object.values(CellConstants.INPUTS).includes(this.props.cellType)) {
      this.renderFunction = createInput;
    }

    this.setState({ loaded: true });
  }

  /**
   * @inheritdoc
   */
  render() {
    return this.renderFunction(this.state.loaded ? this.props : CellConstants.DEFAULT, this.state.eventListeners)
  }
}

Cell.defaultProps = {
  cellType: CellConstants.DEFAULT,
  title: '',
  callback: () => {},
  stateInfo: {},
  mountingProps: {},
}

export default Cell;