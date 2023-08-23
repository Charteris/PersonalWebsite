/**
 * Navigator header element to navigate through the website
 *
 * @author Lachlan Charteris
 * @module js/navigation/Navigator
 */

import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../utils/Cell';
import './css/navigator.css';

class Navigator extends React.Component {
  /**
   * @inheritdoc
   */
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    this.setState({ loaded: true });
  }

  /**
   * @inheritdoc
   */
  render() {
    return (
      <div className={`header-strip sticky`}>
        <div className="title">{this.props.title}</div>
        <div className="buttons sticky">
          {this.props.buttons.map((cellInfo) => {
            return (
              <Cell
                cellType={cellInfo.type}
                title={cellInfo.title}
                callback={cellInfo.callback}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Navigator.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
};

Navigator.defaultProps = {
  title: '',
  subtitle: 'Home',
  buttons: [],
};

export default Navigator;
