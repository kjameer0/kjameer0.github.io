import { ProjectInfo } from './types';
import reactIcon from '../../assets/icons/React-icon.svg.png';
import arrayImg from '../../assets/images/array-16-9.png';
import bTreeImg from '../../assets/images/binary-tree-16-9.png';
//all project and experiment data is stored here, except for last
//pushed dates
export const PROJECTS: ProjectInfo[] = [
  {
    name: 'array-visualizer',
    description: 'Test run of HTML and TypeScript with data structure visualizer concept',
    repoLink: 'https://github.com/kjameer0/array-visualizer',
    imgLink: arrayImg,
    codeLink: 'https://codesandbox.io/p/github/kjameer0/array-visualizer/',
    technologies: ['HTML', 'TypeScript', 'CSS', 'Node.js'],
  },
  {
    name: 'hashmap-visualizer',
    description: 'Teaching tool to visualize data structures',
    repoLink: 'https://github.com/kjameer0/hashmap-visualizer',
    imgLink: bTreeImg,
    codeLink: 'https://kjameer0.github.io/hashmap-visualizer/',
    technologies: ['React', 'TypeScript', 'CSS', 'Node.js'],
  },
  {
    name: 'hiitcoin',
    description: 'Mobile app for designing and timing workouts ',
    repoLink: 'https://github.com/HIITCoin/HiiTCoin',
    imgLink: reactIcon,
    codeLink: '',
    technologies: ['React Native', 'JavaScript', 'CSS', 'chartjs', 'Firestore', 'Node.js'],
  },
  {
    name: 'anime-merchandise-store',
    description: 'Teaching tool to visualize data structures',
    repoLink: 'https://github.com/kjameer0/anime-merchandise-store',
    imgLink: reactIcon,
    codeLink: '',
    technologies: [
      'React',
      'JavaScript',
      'Express',
      'Material UI',
      'Postgres',
      'Sequelize',
      'Node.js',
      'CSS',
    ],
  },
];
export const EXPERIMENTS: ProjectInfo[] = [
  {
    name: 'react-ts-fetch-use-effect-testing',
    description: 'Tinkering with using promises and async/await syntax with useEffect',
    repoLink: 'https://github.com/kjameer0/react-ts-fetch-use-effect-testing',
    imgLink: reactIcon,
    codeLink:
      'https://codesandbox.io/p/github/kjameer0/react-ts-fetch-use-effect-testing/main?workspaceId=be7a002c-4dc3-4f79-8b9e-9b24975a0316&file=%2Fsrc%2FApp.tsx',
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
  {
    name: 'react-useeffect-testing-1',
    description:
      'Figuring out how useEffect can be used to trigger intentional rerenders and avoid unnecessary ones',
    repoLink: 'https://github.com/kjameer0/react-useeffect-testing-1',
    imgLink: reactIcon,
    codeLink: 'https://codesandbox.io/p/github/kjameer0/react-useeffect-testing-1/main',
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
];
