/** 
 * View class to display the resume information
 * 
 * @author Lachlan Charteris
 * @module js/pages/Resume
 */

import React from 'react';
import ResumeConstants from '../constants/ResumeConstants';
import feather from 'feather-icons';

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
    feather.replace();
    return (
      <div className="modal">
        <div className="title-section">
          <div className="buttons" style={{ justifyContent: 'revert' }}>
            <Cell 
              cellType={CellConstants.BUTTONS.BACK} 
              callback={this.cycleSection.bind(this, -1)}
            />
            <div className="text-field">Prev</div>
          </div>

          <div className="title-field">{this.state.title}</div>
          
          <div className="buttons">
            <div className="text-field">Next</div>
            <Cell 
              cellType={CellConstants.BUTTONS.FORWARD} 
              callback={this.cycleSection.bind(this, 1)}
            />
          </div>
        </div>
        {this.state.sectionComponent}
      </div>
    )
  }
}

Resume.defaultProps = {
}

export { Resume };
export default Resume;