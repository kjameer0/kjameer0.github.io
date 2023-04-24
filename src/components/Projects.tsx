//components
import ProjectCard from './reusables/ProjectCard';
//constants
import { PROJECTS, EXPERIMENTS } from 'utils/constants';
//types
import { ProjectInfo } from 'utils/types';
interface Props {
  isProject: boolean;
}
export default function Projects({ isProject }: Props) {
  const title = isProject ? 'Projects' : 'Experiments';
  const listOfWork = isProject ? PROJECTS : EXPERIMENTS;

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
