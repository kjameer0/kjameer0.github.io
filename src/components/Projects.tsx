//tools
import { useEffect } from 'react';
//components
import ProjectCard from './reusables/ProjectCard';
//types
import { ProjectInfo } from 'utils/types';
//constants
import { PROJECTS, EXPERIMENTS } from 'utils/constants';
interface Props {
  isProject: boolean;
}
export default function Projects({ isProject }: Props) {
  const title = isProject ? 'Projects' : 'Experiments';
  const listOfWork = isProject ? PROJECTS : EXPERIMENTS;
  // useEffect(() => {
  //   async function fetchCommitDates
  // }, [])
  return (
    <div className="page-container">
      <h1 className="main-heading">{title}</h1>
      <div className="card-container">
        {listOfWork.map((work) => {
          return <ProjectCard key={work.name} props={work as ProjectInfo} />;
        })}
      </div>
    </div>
  );
}
