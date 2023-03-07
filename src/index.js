/** 
 * Main application component to control all renderable components
 * 
 * @author Lachlan Charteris
 * @module index
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigator from './js/navigation/Navigator';
import Entertainment from './js/pages/Entertainment';
import Resume from './js/pages/Resume';

import CellConstants from './js/constants/CellConstants';
import GlobalConstants from './js/constants/GlobalConstants';

import BackgroundVideo from './res/ContinuousLines.mp4';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      title: GlobalConstants.NAME,
      currentPage: GlobalConstants.PAGE_IDS.ENTERTAINMENT,
      pageTitle: GlobalConstants.PAGE_TITLES.ENTERTAINMENT,

      // Provide button information and callbacks for the Navigator
      buttons: [
        { 
          title: GlobalConstants.PAGE_TITLES.PORTFOLIO, 
          callback: () => this.setState({ 
            currentPage: GlobalConstants.PAGE_IDS.PORTFOLIO,
            pageTitle: GlobalConstants.PAGE_TITLES.PORTFOLIO,
          }), 
          type: CellConstants.BUTTONS.DEFAULT 
        },
        { 
          title: GlobalConstants.PAGE_TITLES.ENTERTAINMENT, 
          callback: () => this.setState({ 
            currentPage: GlobalConstants.PAGE_IDS.ENTERTAINMENT,
            pageTitle: GlobalConstants.PAGE_TITLES.ENTERTAINMENT,
          }), 
          type: CellConstants.BUTTONS.DEFAULT 
        },
        { 
          title: GlobalConstants.PAGE_TITLES.COMMUNICATION, 
          callback: () => this.setState({ 
            currentPage: GlobalConstants.PAGE_IDS.COMMUNICATION,
            pageTitle: GlobalConstants.PAGE_TITLES.COMMUNICATION,
          }), 
          type: CellConstants.BUTTONS.DEFAULT 
        },
      ],
    };

    this.getViewModal = this.getViewModal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 500);
  }

  /**
   * Provides a setter function primarily for the Entertainment component to change subtitle
   * @param {String} subtitle - The new subtitle for the given page
   */
  setSubtitle(subtitle) {
    this.setState({ pageTitle: subtitle });
  }

  /**
   * A function to display the relevant page
   * @returns {React.ELement} 
   */
  getViewModal() {
    switch (this.state.currentPage) {
      case GlobalConstants.PAGE_IDS.PORTFOLIO:
        return ( <Resume /> );
      case GlobalConstants.PAGE_IDS.ENTERTAINMENT:
        return ( <Entertainment 
          setSubtitle={this.setSubtitle}
        /> );
      // case GlobalConstants.PAGE_IDS.COMMUNICATION:
        // return (

        // );
      default:
        return (
          <div className="modal">
            <div className="loading">
              Page Currently Unavailable
            </div>
          </div>
        );
    };
  }

  render() {
    return (
      this.state.loaded ? 
      <div className="background">
        <Navigator 
          title={this.state.title}
          subtitle={this.state.pageTitle}
          buttons={this.state.buttons}
        />
        <video className="background-video" autoPlay loop muted>
          <source src={BackgroundVideo} type='video/mp4' />
        </video>
        {this.getViewModal()}
      </div>
      : <div> Loading... </div>
    );
  }
}

// Define as root component for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);