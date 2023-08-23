/**
 * Contains the relevant constants to define different cells
 *
 * @author Lachlan Charteris
 * @module js/Utils/ResumeConstants
 */

import Photo from '../../res/CharterisLachlan.png';
import ElevatorSketch from '../../res/ElevatorSketch.PNG';
import ElevatorCircuit from '../../res/PhysicalCircuit.png';
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

  // Links - keys correlate to feather-icons
  SOCIALS: {
    github: 'https://github.com/Charteris',
    linkedin: 'https://www.linkedin.com/in/lachlan-charteris-s5143364/',
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

  ARTEFACTS: [
    {
      Title: 'Elevator Project',
      Description: [
        'The ability to problem-solve through self-learning is one of the most critical skills that an engineer or scientist can have. Microprocessor Techniques was one of the first courses which highlighted this criticality through the necessity to learn non-electrical concepts in order to construct a mock elevator.',
        'This course investigated an embedded system which could be implemented on a Tiva microprocessor through C. In particular, the final project required for a system to be developed which highlighted a subset of distinct features, including: Pulse-width modulation (PWM), analog to digital conversion (ADC), Systick Timers, SSI function interrupts, non-standard sensors, numeric keypads, or supporting logic for the system. This was an individual project which entailed the full design, development, and demonstration stages. It also offered some example projects to be conducted (i.e. Pong, a Digital Clock, an Ultrasonic Radar, etc.) whilst also allowing the student to define their own project.',
        'The intended elevator design consisted of some general purpose inputs and outputs (GPIO) such as lights to highlight which floor the elevator is on and buttons denoting which floor to go to. Furthermore, it utilised PWM for the motor driver control; interrupts to allow for emergency stopping; an ultrasonic sensor to measure the elevators height within the shaft, distinguishing which floor the elevator is on; and a UART terminal which allowed for the user to define which floor to go to. Each of these features were sufficiently programmed into the software and implemented through a physical breadboard. A mock elevator shaft was also developed through easily accessible materials - lego - and a gear box was developed for the motor through foam-board and plastic gears, achieving a desirable gear ratio to slow the motor as it was found to be too fast for conventional use.',
        'Ultimately, this project was a success and, whilst not all the features were refined to meet the initial design - primarily due to time constraints - the elevator still functioned. This was an engaging task which pushed me to learn a few mechanical concepts such as gear ratios and a simple pulley system in order to complete its physical implementation. These additional requirements did result in some hiccups during development which prolonged the software implementation, however, I was fortunate enough to be quite proficient in programming allowing me to complete it in mere days. Unfortunately, this did mean that extensive modifications and refinements to the circuit could not even be considered due to time constraints.',
        'Through the development of this project, I was pleased to learn my ability to arm myself with the necessary knowledge required to drive this project to completion. However, this also heavily accentuated the need for thorough pre-planning before the proposal of such a project as the physical requirements were not obvious until development occurred. Of course, this is not always avoidable and mostly acknowledge in retrospect. Nonetheless, this resulted in the majority of time spent building the physical system, rather than focussing on the embedded system as the task required.',
      ],
      Images: [ElevatorSketch, ElevatorCircuit],
    },
    {
      Title: 'Rush Hour',
      Description: [
        'Taking initiative is a critical skill in staying on top of complex tasks. It not allows you to complete objectives earlier, but also allows you to extend upon the initial design and refine it to a much higher standard than you could otherwise. A primary example of this was through the development of a python GUI in implementing artificial intelligence algorithms to solve iterative problems in the game of Rush Hour.',
        'Intelligent Systems explored a variety of complex algorithms and learning agents which are capable of self-solving relatively complex problems. The first major project for this course explored AI algorithms which took a variety of approaches (i.e. brute force, greedy, and heuristic approaches) to solve a varied set of Rush Hour problems. For context, Rush Hour is a childrens game where the player seeks to move vehicles around a board such that a target vehicle is no longer obstructed and can leave the carpark. The board is typically a 6x6 grid where each vehicle can only move forwards or backwards in the direction that they are placed in. Additional complexity is achieved through varying vehicle sizes where cars are 2 grid spaces long and trucks are 3. The algorithms explored during this project included Breadth-First Search (BFS); Iterative Deepening (ID); AStar; and Hill Climbing (both greedy and random-restart).',
        'Since this was my first experience programming in python, I wished to challenge myself and become more proficient in the language. As such, the instant I recieved the assignment,I began setting up the board which the user could interact with. The example board provided throughout the task sheet simply drew the board with ASCII characters within the terminal, however, I decided to take a unique approach and develop a fully integrated GUI through pythons turtle library. Whilst this did not provide me any additional marks during the project, it did grant me more experience in the python language which led to me developing the AI algorithms to a higher standard than before - providing better readability through a cleaner and less bulky implementation. Furthermore, this did not hinder the development of the project as it was completed before the necessary topics were taught throughout the lectures.',
        'The addition of the GUI, whilst not providing any performance or operational benefit, did make for a much nicer application in the end. Furthermore, whilst most implementations only allowed for each algorithm to be investigated independently, this provided a direct comparison between each algorithms performance, as well as how the end result differed considering that most iterative problems can have multiple solutions. Unfortunately, however, there was a caveat in the completion of the task itself. Due to time constraints between being taught the topic and implementing the heuristic approach - the AStar algorithm - the heuristic used within the algorithm was not refined enough to find a solution in all cases. Whilst this was mostly due to the abundance of conflicting projects conducted at the time, it did highlight the fact that rather than implementing the GUI, I could have instead focussed my time on self-educating the topics and implementing them earlier than intended.',
      ],
      Link: 'https://github.com/Charteris/RushHour',
      Images: [RushHourUnsolved, RushHourSolved],
    },
  ],
};

ResumeConstants.TITLES = [ResumeConstants.DEFAULT_TITLE].concat(
  Object.values(ResumeConstants.ARTEFACTS).map((artefact) => artefact.Title),
);

export default ResumeConstants;
