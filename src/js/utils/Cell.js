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
 * @param {Object} stateInfo - relevant CSS style state info for the particular button
 * @returns {React.Element}
 */
function createButton(cellInfo, stateInfo) {
  return (
    <button className={cellInfo.cellType} style={stateInfo.overloads}
      onMouseEnter={stateInfo.eventListeners.mouseenter} onMouseLeave={stateInfo.eventListeners.mouseleave} 
      onMouseDown={stateInfo.eventListeners.mousedown} onMouseUp={stateInfo.eventListeners.mouseup}  
    >
      {cellInfo.title}
    </button>
  );
}

/**
 * Returns a new input object with the relevant information
 * @param {Object} cellInfo - relevant display and callback information for the input 
 * @param {Object} stateInfo - relevant CSS style state info for the particular input
 * @returns {React.Element}
 */
function createInput(cellInfo, stateInfo) {
  return <div>
    <div className="input-title">{cellInfo.title}</div>
    <input className={cellInfo.cellType} onKeyDown={stateInfo.callback} style={stateInfo.overloads}
      onMouseEnter={stateInfo.eventListeners.mouseenter} onMouseLeave={stateInfo.eventListeners.mouseleave} 
    >
    </input>
  </div>;
}

/**
 * Returns a new empty div object with the relevant class style
 * @param {Object} cellInfo - relevant class style information
 * @param {Object} stateInfo - relevant CSS style stateInfo for the particular empty cell
 * @returns {React.Element}
 */
function createEmptyCell(cellInfo, stateInfo) {
  return (
    <div className={cellInfo.cellType} onChange={stateInfo.callback} style={stateInfo.overloads}>
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

    this.state = {
      loaded: false,

      // overloads must be adapted through state via event listeners
      overloads: this.props.overloads,
      callback: this.props.callback,
      eventListeners: {},
    }

    this.renderFunction = createEmptyCell;
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    const colorChanges = CellConstants.USER_FEEDBACK[this.props.cellType] ?? CellConstants.USER_FEEDBACK.DEFAULT;
    let newEventListeners = {
      mouseenter: () => {
        this.changeColor(colorChanges?.mouseenter ?? {});
        this.props.onMounting?.mouseenter();
      },
      mouseleave: () => {
        this.changeColor(colorChanges?.mouseleave ?? {});
        this.props.onMounting?.mouseleave();
      },
    };

    // Set appropriate render function
    if (Object.values(CellConstants.BUTTONS).includes(this.props.cellType)) {
      this.renderFunction = createButton;

      // Initialise event listeners for buttons
      newEventListeners.mousedown = () => this.changeColor(colorChanges?.mousedown ?? {});
      newEventListeners.mouseup = () => {
        this.changeColor(colorChanges?.mouseup ?? {});
        this.props.callback();
      };

    } else if (Object.values(CellConstants.INPUTS).includes(this.props.cellType)) {
      this.renderFunction = createInput;
    }

    this.setState({ loaded: true, eventListeners: newEventListeners });
  }

  /**
   * Assigns new colors to the particular cell object on particular mouse events
   * @param {Object} newColors - A map of new stateInfo (background / border colors) to be assigned
   */
  changeColor(newColors) {
    const newOverloads = Object.assign(
      {...this.state.overloads}, 
      newColors
    );
    this.setState({ overloads: newOverloads });
  }

  /**
   * @inheritdoc
   */
  render() {
    return this.state.loaded
      ? this.renderFunction(this.props, this.state)
      : this.renderFunction(CellConstants.DEFAULT, {});
  }
}

Cell.defaultProps = {
  cellType: CellConstants.DEFAULT,
  title: '',
  callback: () => {},
  stateInfo: {},
}

export default Cell;