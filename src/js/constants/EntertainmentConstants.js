/** 
 * Contains the relevant constants to define different cells
 * 
 * @author Lachlan Charteris
 * @module js/Utils/EntertainmentConstants
 */

const gameOfLifeKey = 'gameOfLife';
const mazeKey = 'maze';
const splineKey = 'spline';
const eulerianKey = 'eulerian';
const mathConceptKey = 'mathConcept';

const EntertainmentConstants = {
  DEFAULT_DESCRIPTION: 'Please hover over any button to see a description.',
  ENTERTAINMENT_LIST: [
    {
      title: 'Games',
      objects: [
        {
          name: 'Game Of Life', 
          key: gameOfLifeKey,
          description: "This is a simulation of John Conway's 'Game Of Life', however, additional implementations are provided to change the neighbourhood applied during convolution, grid size, etc. It is also possible to toggle whether a cell is active, allowing you to explore the possible patterns, as seen through the wiki. There are also other automata's to explore such as Wire World.",
        },
        {
          name: 'Maze Game', 
          key: mazeKey,
          description: "Attempt to solve procedurally generated mazes, or sit back and watch as an artificial intelligence agent solves it for you. This explores many algorithms, including those which are iterative, hueristic, and even those which implement machine learning. It also demonstrates that these algorithms are not only powerful for automated solutions, but also for problem generation.",
        },
      ]
    }, 
    {
      title: 'Simulations',
      objects: [
        {
          name: 'Spline Playground', 
          key: splineKey,
          description: "Explore the wonders of splines, including how different functions (i.e. Bezier, Hermite, Catmull-Rom, etc.) generate different curvatures / shapes across customisable paths / polygons.",
        },
        {
          name: 'Eulerian Fluid Simulator', 
          key: eulerianKey,
          description: "Delve into the nature of gas and fluid propagation by analysing the effects of intersecting sources, obstructions, and more.",
        },
      ],
    }, 
    {
      title: 'Animations',
      objects: [
        {
          name: 'Mathematical Concepts', 
          key: mathConceptKey,
          description: "Animations of mathematical concepts from Convolutions, to Fourier Transforms, through to Spline generation. Most of these concepts can be seen practically through the Games and Simulations provided.",
        },
      ],
    },
  ],

  PAGE_IDS: {
    GAME_OF_LIFE: gameOfLifeKey,
    MAZE_GAME: mazeKey,
    SPLINE_PLAYGROUND: splineKey,
    EULERIAN_FLUID_SIM: eulerianKey,
    MATH_ANIMATIONS: mathConceptKey,
  },
}

export default EntertainmentConstants;