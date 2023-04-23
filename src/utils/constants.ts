import { ProjectInfo } from './types';
export const PROJECTS: ProjectInfo[] = [
  {
    name: 'hashmap-visualizer',
    description: 'Teaching tool to visualize data structures',
    lastCommit: '',
    repoLink: 'https://github.com/kjameer0/hashmap-visualizer',
    imgLink: '/images/binary-tree-16-9.png',
    codeLink: 'https://kjameer0.github.io/hashmap-visualizer/',
    technologies: ['React', 'TypeScript', 'CSS'],
  },
  {
    name: 'array-visualizer',
    description: 'Test run of HTML and TypeScript with data structure visualizer concept',
    lastCommit: '',
    repoLink: 'https://github.com/kjameer0/array-visualizer',
    imgLink: '/images/array-16-9.png',
    codeLink: 'https://kjameer0.github.io/array-visualizer/',
    technologies: ['HTML', 'TypeScript', 'CSS'],
  },
];

// function projectFactory({
//   params: { name, description, lastCommit, repoLink, imgLink, codeLink },
// }: {
//   params: ProjectInfo;
// }) {
//   return {};
// }
