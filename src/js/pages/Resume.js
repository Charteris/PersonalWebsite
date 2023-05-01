/** 
 * View class to display the resume information
 * 
 * @author Lachlan Charteris
 * @module js/pages/Resume
 */

import React from 'react';
import ResumeConstants from '../constants/ResumeConstants';
import withModal from '../hoc/withModal';

import CellConstants from '../constants/CellConstants';
import Cell from '../utils/Cell';

import './css/pagestyle.css';

class Resume extends React.Component {
  /**
   * @inheritdoc
   */
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      titleIndex: 0,
      title: ResumeConstants.TITLES[0],
      sectionComponent: ResumeConstants.COMPONENTS[0],
    }
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    this.setState({ loaded: true });
  }

  cycleSection(offset) {
    let newIndex = (this.state.titleIndex + offset) % ResumeConstants.TITLES.length;
    if (newIndex < 0) {
      newIndex += ResumeConstants.TITLES.length;
    }
    
    this.setState({ 
      titleIndex: newIndex,
      title: ResumeConstants.TITLES[newIndex],
      sectionComponent: ResumeConstants.COMPONENTS[newIndex],
    });
  }

  /**
   * @inheritdoc
   */
  render() {
    return (
      <>
        <Cell 
          cellType={CellConstants.BUTTONS.BACK} 
          styleOverloads={{left: '-17.5%', top: '6.3vh'}} 
          callback={this.cycleSection.bind(this, -1)}
        />
        <div className="title-field" style={{ top: '0' }}>{this.state.title}</div>
        <Cell 
          cellType={CellConstants.BUTTONS.FORWARD}
          styleOverloads={{left: '10%', top: '-6.3vh'}} 
          callback={this.cycleSection.bind(this, 1)}
        />
        {this.state.sectionComponent}
      </>
    )
  }
}

Resume.defaultProps = {
}

export { Resume };
export default withModal(Resume, { height: '100%' });