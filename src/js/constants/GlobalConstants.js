/** 
 * Store global constants which may be referred by most files
 * 
 * @author Lachlan Charteris
 * @module js/GlobalConstants
 */

const GlobalConstants = {
  NAME: 'Lachlan Charteris',
  DEFAULT_PAGE: 'PORTFOLIO',
  PAGE_TITLES: {
    PORTFOLIO: 'Portfolio',
    ENTERTAINMENT: 'Entertainment',
    COMMUNICATION: 'Communication',
  },
  PAGE_IDS: {
    PORTFOLIO: 'portfolio',
    ENTERTAINMENT: 'entertainment',
    COMMUNICATION: 'communication',
  }
}

GlobalConstants.DEFAULT_PAGE_TITLE = GlobalConstants.PAGE_TITLES[GlobalConstants.DEFAULT_PAGE];
GlobalConstants.DEFAULT_PAGE_ID = GlobalConstants.PAGE_IDS[GlobalConstants.DEFAULT_PAGE];

export default GlobalConstants;