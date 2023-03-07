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

CellConstants.USER_FEEDBACK = {
  // If other keys are inactive, default to this key
  DEFAULT: {
    mouseenter: { borderColor: CellConstants.COLORS.ACTIVE_BORDER },
    mouseleave: { background: CellConstants.COLORS.CELL, borderColor: CellConstants.COLORS.BORDER },
    mousedown: { background: CellConstants.COLORS.BORDER },
    mouseup: { background: CellConstants.COLORS.CELL },
  },

  'button-left-arrow': { // forward
    mouseenter: { 
      borderRightColor: CellConstants.COLORS.TEXT, 
      borderBottomColor: CellConstants.COLORS.TEXT 
    },
    mouseleave: { 
      borderRightColor: CellConstants.COLORS.ACTIVE_BORDER, 
      borderBottomColor: CellConstants.COLORS.ACTIVE_BORDER 
    },
    mousedown: { 
      borderRightColor: CellConstants.COLORS.CELL, 
      borderBottomColor: CellConstants.COLORS.CELL 
    },
    mouseup: { 
      borderRightColor: CellConstants.COLORS.TEXT, 
      borderBottomColor: CellConstants.COLORS.TEXT 
    },
  },

  'button-right-arrow': { // back
    mouseenter: { 
      borderLeftColor: CellConstants.COLORS.TEXT, 
      borderBottomColor: CellConstants.COLORS.TEXT 
    },
    mouseleave: { 
      borderLeftColor: CellConstants.COLORS.ACTIVE_BORDER, 
      borderBottomColor: CellConstants.COLORS.ACTIVE_BORDER 
    },
    mousedown: { 
      borderLeftColor: CellConstants.COLORS.CELL, 
      borderBottomColor: CellConstants.COLORS.CELL 
    },
    mouseup: { 
      borderLeftColor: CellConstants.COLORS.TEXT, 
      borderBottomColor: CellConstants.COLORS.TEXT 
    },
  },
}

export default CellConstants;