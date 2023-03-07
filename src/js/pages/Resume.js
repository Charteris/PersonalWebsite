/** 
 * View class to display the resume information
 * 
 * @author Lachlan Charteris
 * @module js/pages/Resume
 */

import React from 'react';
import ResumeConstants from '../constants/ResumeConstants';
import withModal from '../hoc/withModal';

import Photo from '../../res/CharterisLachlan.png';
import './css/pagestyle.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      title: ResumeConstants.TITLE,
    }
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <>
        <div className="title-field">{this.state.title}</div>
        <img className="image-field" src={Photo} alt="" />
        {this.props.displayFields.map((field) => 
          <div className="text-field">{`${field}: ${this.props[field.toLowerCase()]}`}</div>
        )}
        <div className = "description-field" style={{top: '58vh'}}>
          {this.props.description}
        </div>
      </>
    )
  }
}

Resume.defaultProps = {
  name: ResumeConstants.NAME,
  age: ResumeConstants.AGE,
  profession: ResumeConstants.PROFESSION,
  email: ResumeConstants.EMAIL,
  phone: ResumeConstants.PHONE,
  description: ResumeConstants.DESCRIPTION,
  photo: ResumeConstants.PHOTO,
  displayFields: ['Name', 'Age', 'Profession', 'Email', 'Phone'],
}

export { Resume };
export default withModal(Resume);