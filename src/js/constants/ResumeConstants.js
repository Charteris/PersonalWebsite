/** 
 * Contains the relevant constants to define different cells
 * 
 * @author Lachlan Charteris
 * @module js/Utils/ResumeConstants
 */

import Photo from '../../res/CharterisLachlan.png';
import ElevatorSketch from '../../res/ElevatorSketch.PNG';
import ElevatorCircuit from '../../res/RoughCircuitDiagram.JPG';
import RushHourUnsolved from '../../res/RushHourA.PNG';
import RushHourSolved from '../../res/RushHourB.PNG';

const ResumeConstants = {
  DEFAULT_TITLE: 'About Me',

  // General Information
  GENERAL_INFO: {
    Name: 'Lachlan Charteris',
    Age: 21,
    Profession: 'Software Engineer',
    Email: 'charterislachlan@gmail.com',
    Mobile: '0460531333',
  },
  SOCIALS: {
    Github: 'https://github.com/Charteris',
    LinkedIn: 'https://www.linkedin.com/in/lachlan-charteris-s5143364/',
  },

  // About Me Section
  PHOTO: Photo,
  ABOUT_ME: [
    'I have always had a curious mind, constantly engaged in learning new concepts and picking up useful skills. My passion for science and technology has been my primary motivator and has driven me to take initiative in every aspect of my life. Despite this venture for knowledge, I have also enjoyed passing it forward to others in engaging and entertaining ways such as through interactive applications (most commonly, games), and teaching. Ultimately, this was the primary distinguisher between a purely scientific field such as science, and a more technological field such as engineering. I knew I wanted to pursue physics - particularly with a passion for electromagnetism - whilst still being able to develop complex and interactive applications. Thus, after solidifying my options through an experiential engineering program within high school, I delved into the field of Electrical and Electronic Engineering with Computer Science as a supportive measure.',
    'Early in my degree, I grew a keen interest for problem-solving. Not that I never solved problems before, but challenging myself to solve non-trivial problems through an ever-increasing toolkit of investigative and exploitative measures became a new hobby of mine. I also found it exhilarating to enhance and adapt my mental model of how physics and chemistry melded together in the formation of all that we now, particularly once I understood how mathematical methods provided verification of what we know to be true. Each of these factors continue to propel me in furthering my understanding whilst also motivating me to continue expanding my skills.',
    `Throughout my degree, I have gone above and beyond to excel academically ensuring that every submission is a reflection of my passion and drive. This has lead me to some amazing places such as undergoing undergraduate research on the extraction of fetal ECG signals from abdominal ECG's, and eventually to an exciting undergraduate Software Engineering role which continues to support and drive my inhibitions. Although, as much as it has felt like it at times, it hasn't always be all work no play. I've also made lifelong friendships with like-minded people and had once in a lifetime experiences overseas.`,
    `Where am I going next - I hear you ask. Whilst my short-term goals are constrained to graduating from my degree, I intend to continue developing my skills and solving real-world problems within industry. Whilst I am still uncertain of my 'dream' field, I am most intrigued by signal and image processing - granted the only real difference between the two it the dimensionality of the medium. Whether that be in the context of data science; microcontrollers; communications; or some combination of each; I am confident that I will always find excitement and joy from the problem-solving and analysis required to complete the task.`,
    `For the most part, I am my happiest when I can progress my knowledge and hone my skills on challenging, real-world problems. Seeing impactful projects that I have had the privilege to work on come into fruition has always provided me with joy. Despite this, my ambitions going forward remain relatively simple. Ultimately, I mostly long to provide ease-of-life to all. Whether that be directly through targeted applications which simplify workflows, or adversely through development of efficient algorithms which provide more effective feedback and situational awareness within a particular field. All-in-all, I really just want to help.`,
  ],

  ARTEFACTS: {
    Elevator: {
      Title: 'Elevator Project',
      Description: '',
      Reflection: '',
      Images: [ ElevatorSketch, ElevatorCircuit ],
    },
    RushHour: {
      Title: 'Rush Hour',
      Description: '',
      Reflection: '',
      Link: 'https://github.com/Charteris/RushHour',
      Images: [ RushHourUnsolved, RushHourSolved ],
    },
  },
}

ResumeConstants.TITLES = [ResumeConstants.DEFAULT_TITLE].concat(
  Object.values(ResumeConstants.ARTEFACTS).map((artefact) => artefact.Title)
);

ResumeConstants.COMPONENTS = [
  <>
    {ResumeConstants.ABOUT_ME.map((paragraph) => 
      <div className="text-field">{paragraph}</div>
    )}
    <img className="image-field" src={ResumeConstants.PHOTO} alt="" />
    {Object.entries(ResumeConstants.GENERAL_INFO).map(([field, value]) => 
      <div className="info-field">{`${field}: ${value}`}</div>
    )}
    {Object.entries(ResumeConstants.SOCIALS).map(([field, value]) => 
      <a className="hypertext" href={value} rel="noreferrer" style={
        { left: '35%', top: '-42vh' }
      }>
        {field}
      </a>
    )}
  </>,

  <>
    <img className="image-field" alt="" src={ResumeConstants.ARTEFACTS.Elevator.Images[0]}
      style={{ left: '0', top: '-5vh', borderRadius: '1vw' }}
    />
    <div className="text-field">{ResumeConstants.ARTEFACTS.Elevator.Description}</div>
    <div className="text-field">{ResumeConstants.ARTEFACTS.Elevator.Reflection}</div>
    <img className="image-field" alt="" src={ResumeConstants.ARTEFACTS.Elevator.Images[1]}
      style={{ left: '0', top: '50vh', borderRadius: '1vw' }}
    />
  </>,
  
  <>
    <img className="image-field" alt="" src={ResumeConstants.ARTEFACTS.RushHour.Images[0]}
      style={{ left: '-10%', top: '32vh', borderRadius: '1vw' }}
    />
    <div className="text-field">{ResumeConstants.ARTEFACTS.RushHour.Description}</div>
    <div className="text-field">{ResumeConstants.ARTEFACTS.RushHour.Reflection}</div>
    <a className="info-field" href={ResumeConstants.ARTEFACTS.RushHour.Link} rel="noreferrer">
      Source Code
    </a>
    <img className="image-field" alt="" src={ResumeConstants.ARTEFACTS.RushHour.Images[1]}
      style={{ left: '35%', top: '32vh', borderRadius: '1vw' }}
    />
  </>,
]

export default ResumeConstants;