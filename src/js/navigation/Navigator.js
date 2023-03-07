/** 
 * Navigator header element to navigate through the website
 * 
 * @author Lachlan Charteris
 * @module js/navigation/Navigator
 */

import React from 'react';
import Cell from '../utils/Cell'
import './css/navigator.css';

class Navigator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  render() {
    return (
      <div className="header-strip">
        <div className="title">{this.props.title}</div>
        <div className="subtitle">{'- ' + this.props.subtitle}</div>
        <div className="buttons">
          {this.props.buttons.map((cellInfo) => {
            return <Cell
              cellType={cellInfo.type}
              title={cellInfo.title}
              callback={cellInfo.callback}
            />;
          })}
        </div>
      </div>
    );
  }
}

Navigator.defaultProps = {
  title: '',
  subtitle: 'Home',
  cells: [],
}

export default Navigator;