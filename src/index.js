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
  /**
   * Initializes component
   * @param {Object} props - The props passed to the component
   */
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      title: GlobalConstants.NAME,
      currentPage: GlobalConstants.DEFAULT_PAGE_ID,
      pageTitle: GlobalConstants.DEFAULT_PAGE_TITLE,

      // Provide button information and callbacks for the Navigator
      buttons: Object.entries(GlobalConstants.PAGE_TITLES).map(([field, value]) => {
        return { 
          title: value, 
          callback: () => this.setState({ 
            currentPage: GlobalConstants.PAGE_IDS[field],
            pageTitle: value,
          }), 
          type: CellConstants.BUTTONS.DEFAULT,
        };
      }),
    };

    this.getViewModal = this.getViewModal.bind(this);
  }

  /**
   * Completes component initialization upon mounting
   */
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

  /**
   * Renders the component
   * @return {React.Component} The rendered component
   */
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