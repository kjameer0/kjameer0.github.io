import { ProjectInfo } from './types';
//all project and experiment data is stored here, except for last
//pushed dates
export const PROJECTS: ProjectInfo[] = [
  {
    name: 'array-visualizer',
    description: 'Test run of HTML and TypeScript with data structure visualizer concept',
    repoLink: 'https://github.com/kjameer0/array-visualizer',
    imgLink: '/images/array-16-9.png',
    codeLink: 'https://codesandbox.io/p/github/kjameer0/array-visualizer/',
    technologies: ['HTML', 'TypeScript', 'CSS'],
  },
  {
    name: 'hashmap-visualizer',
    description: 'Teaching tool to visualize data structures',
    repoLink: 'https://github.com/kjameer0/hashmap-visualizer',
    imgLink: '/images/binary-tree-16-9.png',
    codeLink: 'https://kjameer0.github.io/hashmap-visualizer/',
    technologies: ['React', 'TypeScript', 'CSS'],
  },
];
export const EXPERIMENTS: ProjectInfo[] = [
  {
    name: 'react-ts-fetch-use-effect-testing',
    description: 'Tinkering with using promises and async/await syntax with useEffect',
    repoLink: 'https://github.com/kjameer0/react-ts-fetch-use-effect-testing',
    imgLink: '/icons/React-icon.svg.png',
    codeLink:
      'https://codesandbox.io/p/github/kjameer0/react-ts-fetch-use-effect-testing/main?workspaceId=be7a002c-4dc3-4f79-8b9e-9b24975a0316&file=%2Fsrc%2FApp.tsx',
    technologies: ['React', 'TypeScript'],
  },
];


