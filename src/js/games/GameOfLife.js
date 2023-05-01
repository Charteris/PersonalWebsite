/** 
 * View class to display the GameOfLife information
 * 
 * @author Lachlan Charteris
 * @module js/games/GameOfLife
 */

import React from 'react';

import GameConstants from '../constants/GameConstants';
import CellConstants from '../constants/CellConstants';
import MathUtils from '../utils/MathUtils';
import Cell from '../utils/Cell';
import Grid from './Grid';

import './css/gamestyle.css';

class GameOfLife extends React.Component {
  /**
   * @inheritdoc
   */
  constructor(props) {
    super(props);

    const gameSize = GameConstants.DEFAULT_MATRIX_SIZE;
    this.state = {
      loaded: false,

      title: GameConstants.GAMES.GAME_OF_LIFE,
      description: GameConstants.GAME_OF_LIFE.DESCRIPTION,
      rules: GameConstants.GAME_OF_LIFE.RULE,
      automataIndex: 0,

      evaluationFunction: this.evaluate.bind(this),
      stepFunction: this.convolveMatrix.bind(this),
      resetFunctions: [
        () => this.generateRandomGrid(this.state.gameSize, this.state.gameSize),
        () => Array(this.state.gameSize).fill(0).map(() => Array(this.state.gameSize).fill(0))
      ],

      neighbourhood: GameConstants.NEIGHBOURHOODS.MOORES,
      neighbourhoodIndex: 0,

      gameSize: gameSize,
      cellSize: GameConstants.DEFAULT_CELL_WIDTH,

      matrix: this.generateRandomGrid(gameSize, gameSize),
      intervalId: null,
      stepSpeed: 100, // ms
      options: [],
    };

    this.getIntervalButton = this.getIntervalButton.bind(this);
    this.generateRandomGrid = this.generateRandomGrid.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeSize = this.changeSize.bind(this);

    this.iterateNeighbourhood = this.iterateNeighbourhood.bind(this);
    this.iterateAutomata = this.iterateAutomata.bind(this);
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    this.setState({ 
      loaded: true,
      options: [
        { 
          title: 'Reset', 
          callback: () => this.setState({ matrix: this.state.resetFunctions[this.state.neighbourhoodIndex]() }), 
          type: CellConstants.BUTTONS.DEFAULT 
        },
        { 
          title: 'Step', 
          callback: this.state.stepFunction, 
          type: CellConstants.BUTTONS.DEFAULT 
        },
      ]
    });
  }

  /**
   * Simple helper function to step to the next convolution state
   */
  convolveMatrix() {
    this.setState({ 
      matrix: MathUtils.convolve(this.state.matrix, this.state.neighbourhood.kernel, this.state.evaluationFunction)
    });
  }

  /**
   * Determines whether the start or stop button should be displayed according to the interval id
   * @returns {Object} Relevant button info
   */
  getIntervalButton() {
    if (this.state.intervalId === null) {
      return { 
        title: 'Start', 
        callback: () => this.setState({ intervalId: setInterval(
          this.state.stepFunction, this.state.stepSpeed
        ) }),
        type: CellConstants.BUTTONS.DEFAULT,
      };
    }

    return { 
      title: 'Stop', 
      callback: () => {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
      },
      type: CellConstants.BUTTONS.DEFAULT ,
    };
  }

  /**
   * Generates a randomised grid of values for a set size
   * @param {Integer} width - The number of columns in the grid
   * @param {Integer} height - The number of rows in the grid
   * @param {Integer} maxValue - The maximum value initialised within the grid
   * @returns {Array} The resultant grid
   */
  generateRandomGrid(width, height, maxValue = 1) {
    return Array(height).fill(0).map(() => 
      Array(width).fill(0).map(() => Math.floor(Math.random() * (maxValue + 1)))
    );
  }

  /**
   * An evaluation function to be called during convolution to determine appropriate next state
   * @param {Integer} originalValue - The initial state of the cell
   * @param {Integer} neighbourhood - The number of living neighbours in the neighbourhood
   * @returns {Integer} Boolean integer denoting alive (1) or dead (0) cell
   */
  evaluate(originalValue, neighbourhood) {
    // Dead cell becomes alive from 3+ alive neighbours
    if (originalValue === 0 && neighbourhood === 3) {
      return 1;
    }
    // Cell remains alive with 2-3 alive neighbours
    if (originalValue === 1 && (neighbourhood < 2 || neighbourhood > 3)) {
      return 0;
    }
    return originalValue;
  }

  /**
   * Toggles a selected cell from being active to becoming inactive
   * @param {Integer} rowIndex - The respective x-index of the cell being toggled
   * @param {Integer} Index - The respective y-index of the cells row being toggled
   */
  toggle(rowIndex, index) {
    let tempMatrix = this.state.matrix;
    tempMatrix[rowIndex][index] = tempMatrix[rowIndex][index] === 1 ? 0 : 1;
    this.setState({ matrix: tempMatrix });
  }

  /**
   * Determines how many cells per row / column exist in the matrix
   * @param {Event} event - The new matrix size
   */
  changeSize(event) {
    if (event.key === 'Enter') {
      const newSize = Number(event.target.value);

      if (Number.isNaN(newSize) || newSize > GameConstants.DEFAULT_MATRIX_SIZE) {
        console.warn('Invalid Input...');
      } else {
        const newCellSize = Number((GameConstants.DEFAULT_MATRIX_SIZE / newSize).toFixed(3));
        this.setState({ 
          matrix: this.generateRandomGrid(newSize, newSize),
          gameSize: newSize,
          cellSize: `${newCellSize}vw`,
        });
      }
    }
  }

  /**
   * Iterates the neighbourhood applied during convolution based on the constants provided
   * @param {Integer} shift - The index step number (typically -1 or 1)
   */
  iterateNeighbourhood(shift) {
    let newIndex = this.state.neighbourhoodIndex + shift;
    if (newIndex < 0) {
      newIndex = GameConstants.NEIGHBOURHOOD_KEYS.length - 1;
    } else if (newIndex >= GameConstants.NEIGHBOURHOOD_KEYS.length) {
      newIndex = 0;
    }

    const newNeighbourhood = GameConstants.NEIGHBOURHOODS[ GameConstants.NEIGHBOURHOOD_KEYS[newIndex] ];
    this.setState({ neighbourhoodIndex: newIndex, neighbourhood: newNeighbourhood });
  }

  /**
   * Iterates the current automata being displayed and resets all default values
   * @param {Integer} shift - The index step number (typically -1 or 1)
   */
  iterateAutomata(shift) {
    let newIndex = this.state.automataIndex + shift;
    if (newIndex < 0) {
      newIndex = this.state.resetFunctions.length - 1;
    } else if (newIndex >= this.state.resetFunctions.length) {
      newIndex = 0;
    }

    const key = GameConstants.AUTOMATA_KEYS[newIndex];
    this.setState({
      title: GameConstants.GAMES[key],
      description: GameConstants[key].DESCRIPTION,
      rules: GameConstants[key].RULE,
      automataIndex: newIndex,

      evaluationFunction: this.evaluate,
      neighbourhood: GameConstants.NEIGHBOURHOODS.MOORES,
      neighbourhoodIndex: 0,

      gameSize: GameConstants.DEFAULT_MATRIX_SIZE,
      cellSize: GameConstants.DEFAULT_CELL_WIDTH,

      matrix: this.state.resetFunctions[newIndex](),
      intervalId: null,
      stepSpeed: 100, // ms
    });
  }

  /**
   * @inheritdoc
   */
  render() {
    const intervalButton = this.getIntervalButton();

    return <div>
      <div className="modal" style={{width: '30vw'}}>
        {/* Title and rule fields */}
        <div className="title-field" style={{left: '5vw'}}>
          {this.state.title}
        </div>
        <div className="rule-set">
          {this.state.description}
        </div>

        <div style={{position: 'relative', top: '5vh'}}>
          <div className="rule-set">Rules:</div>
          {this.state.rules.map((rule, index) => 
            <div className="rule-set">{`${index + 1}. ${rule}`}</div>
          )}

          <div style={{position: 'relative', top: '15vh'}}>
            <Cell 
              cellType={CellConstants.BUTTONS.BACK}
              callback={this.iterateAutomata.bind(this, -1)}
            />
            <Cell 
              cellType={CellConstants.BUTTONS.FORWARD}
              callback={this.iterateAutomata.bind(this, 1)}
            />
          </div>
        </div>
      </div>

      <div className="modal" style={{width: '55vw', left: '40vw'}}>
        {/* The main game grid */}
        <Grid 
          matrix={this.state.matrix}
          toggle={this.toggle}
          cellWidth={this.state.cellSize}
          cellHeight={this.state.cellSize}
        />

        {/* Side bar components including game size, neighbourhood selection */}
        <div className="sidebar">
          <Cell 
            cellType={CellConstants.INPUTS.DEFAULT}
            title={'Change Board Size:'}
            callback={this.changeSize}
          />

          {/* Neighbourhood selection */}
          <div style={{position: 'relative', left: '-1vw', top: '4vh'}}>
            <div className="rule-set" style={{width: '10vw', left: '2.5vw', top: '-2vh', }}>
              {this.state.neighbourhood.name}
            </div>
            <Cell 
              cellType={CellConstants.BUTTONS.BACK} 
              overloads={{left: '-8.5vw', top: '3.5vh'}} 
              callback={this.iterateNeighbourhood.bind(this, -1)}
            />
            <Grid 
              matrix={this.state.neighbourhood.kernel}
              overloads={{left: '-17.5vw', top: '4vh'}}
            />
            <Cell 
              cellType={CellConstants.BUTTONS.FORWARD}
              overloads={{left: '3.5vw', top: '-3.5vh'}} 
              callback={this.iterateNeighbourhood.bind(this, 1)}
            />
          </div>

          {/* Options buttons including reset, step, and start/stop */}
          <div style={{position: 'relative', left: '-1vw', top: '25vh'}}>
            {this.state.options.map((option) =>
              <Cell 
                cellType={option.type}
                title={option.title}
                callback={option.callback}
              />
            )}
            <Cell 
              cellType={intervalButton.type}
              title={intervalButton.title}
              callback={intervalButton.callback}
            />
          </div>
        </div>
      </div>
    </div>;  
  }
}

GameOfLife.defaultProps = {
}

export default GameOfLife;