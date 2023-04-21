//tools
import { useEffect } from 'react';
//components
import ProjectCard from './reusables/ProjectCard';
//types
import { ProjectInfo } from 'utils/types';
//constants
import { PROJECTS } from 'utils/constants';
export default function Projects() {
  // useEffect(() => {
  //   async function fetchCommitDates
  // }, [])
  return (
    <div className="page-container">
      <h1 className="main-heading">Projects</h1>
      <div className="card-container">
        {PROJECTS.map((project) => {
          return <ProjectCard key={project.name} props={project} />;
        })}
      </div>
    </div>
  );
}
