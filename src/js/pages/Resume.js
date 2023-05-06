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
    }
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    this.setState({ loaded: true });
  }

  /**
   * Cycles which section is active
   * 
   * @param {Integer} offset - The index step with each cycle (typically -1 or 1) @default 1
   */
  cycleSection(offset = 1) {
    let newIndex = (this.state.titleIndex + offset) % ResumeConstants.TITLES.length;
    if (newIndex < 0) {
      newIndex += ResumeConstants.TITLES.length;
    }
    
    this.setState({ 
      titleIndex: newIndex,
      title: ResumeConstants.TITLES[newIndex],
    });
  }

  renderSection() {
    if (this.state.titleIndex > 0) {
      const artefact = ResumeConstants.ARTEFACTS[this.state.titleIndex - 1];
      return (
        <div className="main-section">
          <div className="info-section">
            {artefact.Images.map((image) =>
              <img className="image-field" alt="" src={image} />
            )}
            {artefact.Link
              ? <a className="link" href={artefact.Link} rel="noreferrer">
                  <i data-feather="github"></i>
                  <div>github</div>
                </a>
              : <></>
            }
          </div>
          <div className="text-section">
            {artefact.Description.map((text) =>
              <div className="text-field">{text}</div>
            )}
          </div>
          {feather.replace()}
        </div>
      );
    }

    return (
      <div className="main-section">
        <div className="text-section">
          {ResumeConstants.ABOUT_ME.map((paragraph) => 
            <div className="text-field">{paragraph}</div>
          )}
        </div>
        <div className="info-section">
          <img className="image-field" src={ResumeConstants.PHOTO} alt="" />
          <div className="general-info-section">
            {Object.entries(ResumeConstants.GENERAL_INFO).map(([field, value]) => 
              <div className="info-field">{`${field}: ${value}`}</div>
            )}
          </div>
          <div className="links">
            {Object.entries(ResumeConstants.SOCIALS).map(([field, link]) => 
              <a className="link" href={link} rel="noreferrer">
                <i data-feather={field}></i>
                <div>{field}</div>
              </a>
            )}
          </div>
        </div>
        {feather.replace()}
      </div>
    );
  }

  /**
   * @inheritdoc
   */
  render() {
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
        {this.renderSection()}
      </div>
    )
  }
}

Resume.defaultProps = {
}

export { Resume };
export default Resume;