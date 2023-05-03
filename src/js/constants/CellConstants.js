/** 
 * Contains the relevant constants to define different cells
 * 
 * @author Lachlan Charteris
 * @module js/Utils/CellConstants
 */

const CellConstants = {
  // Defines the class names for each cell type
  DEFAULT: 'generic-object',

  BUTTONS: {
    DEFAULT: 'button-object',
    FORWARD: 'button-left-arrow',
    BACK: 'button-right-arrow',
    HEADER: 'button-header',
  },

  INPUTS: {
    DEFAULT: 'input-object',
  },
  
  COLORS: {
    BACKGROUND: '#17181B',
    BORDER: '#0E1013',
    ACTIVE_BORDER: '#4C4F51',
    TEXT: '#80868B',
    CELL: '#202124',
  },
}

export default CellConstants;