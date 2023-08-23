/**
 * HOC to provide loading and modal display
 *
 * @author Lachlan Charteris
 * @module js/hoc/withModal
 */

import React from 'react';
import '../pages/css/pagestyle.css';

const DISPLAY_MESSAGES = {
  loading: 'Loading Modal',
  error: 'An Error Has Occurred!',
};

/**
 * Provides loading and modal background for component
 * @param {React.Component} WrappedComponent - The component being wrapped
 */
const withModal = (WrappedComponent, modalStyle = {}) => {
  return class WithModal extends React.Component {
    /**
     * @constructor
     * @inheritdoc
     */
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        isError: false,
        displayedMessage: DISPLAY_MESSAGES.loading,
      };
    }

    /**
     * @inheritdoc
     */
    componentDidMount() {
      this.setState({ isLoaded: true });
    }

    /**
     * @inheritdoc
     */
    render() {
      return (
        <div className="modal" style={modalStyle}>
          {this.state.isLoaded && !this.state.isError ? (
            <WrappedComponent {...this.props} />
          ) : (
            <div className="loading">{this.state.displayedMessage}</div>
          )}
        </div>
      );
    }

    componentDidCatch() {
      this.setState({
        isError: true,
        displayedMessage: DISPLAY_MESSAGES.error,
      });
    }
  };
};

export default withModal;
