/** 
 * Contains the relevant constants to define different cells
 * 
 * @author Lachlan Charteris
 * @module js/Utils/GameConstants
 */

const GameConstants = {
  // Note that these match .grid element in gamestyle.css
  GRID_WIDTH: '36vw',
  GRID_HEIGHT: '36vw',

  DEFAULT_MATRIX_SIZE: 36, // number of cells per row / column
  DEFAULT_CELL_WIDTH: '1vw',
  DEFAULT_CELL_HEIGHT: '1vw',

  COLORS: {
    INACTIVE: '#000000',
    ACTIVE: '#4C4F51',

    ELECTRON_HEAD: '#45A3E0',
    ELECTRON_TAIL: '#E08645',
    CONDUCTOR: '#E0DC45',
  },

  AUTOMATA_KEYS: ['GAME_OF_LIFE', 'WIRE_WORLD'],
  GAMES: {
    GAME_OF_LIFE: 'Game Of Life',
    WIRE_WORLD: 'Wire World',
    MAZE_GAME: 'The Maze',
  },

  NEIGHBOURHOOD_KEYS: ['MOORES', 'VON_NEUMANN'],
  NEIGHBOURHOODS: {
    MOORES: {
      name: "Moore's Neighbourhood",
      kernel: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
    },

    VON_NEUMANN: {
      name: "Von-Neumann's Neighbourhood",
      kernel: [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
      ],
    },
  },
};

GameConstants.DEFAULT_CELL_MAP = {
  0: GameConstants.COLORS.INACTIVE,
  1: GameConstants.COLORS.ACTIVE,
};

GameConstants.GAME_OF_LIFE = {
  DESCRIPTION: "John Conway's 'Game Of Life' is an intricate cellular automata, depicting the formation and cycle of life across convolutional states which are governed by the three simple rules outlined below. It is a Turing complete simulation with a broad range of 'entities', some of which are even capable of motion. More information can be found through the wikipedia page. Note this is typically implemented with Moore's neighbourhood.",
  RULE: [
    "Any live cell with two or three live neighbours survives.",
    "Any dead cell with three live neighbours becomes a live cell.",
    "All other live cells die in the next generation. Similarly, all other dead cells stay dead.",
  ],
  CELL_MAP: GameConstants.DEFAULT_CELL_MAP,
};

GameConstants.WIRE_WORLD = {
  DESCRIPTION: "Brian Silvermans Wire World is a 4-state cellular automata, typically implemented with Moore's neigbourhood. Compared to regular cellular-automata, this isolates environmental changes to 'conductors' in order to simulate the traditional interpretation of electron flow.",
  RULE: [
    "empty → empty",
    "electron head → electron tail",
    "electron tail → conductor",
    "conductor → electron head if exactly one or two of the neighboring cells are electron heads, otherwise remains conductor.",
  ],
  CELL_MAP: {
    0: GameConstants.COLORS.INACTIVE,
    1: GameConstants.COLORS.ELECTRON_HEAD,
    2: GameConstants.COLORS.ELECTRON_TAIL,
    3: GameConstants.COLORS.CONDUCTOR,
  },
};

export default GameConstants;