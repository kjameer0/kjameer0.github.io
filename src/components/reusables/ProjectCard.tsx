import { ProjectInfo } from 'utils/types';
export default function ProjectCard({
  props: { name, description, lastCommit, repoLink, imgLink, codeLink, technologies },
}: {
  props: ProjectInfo;
}) {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <img src={imgLink} alt={name} />
      <p>{description}</p>
      <p>{lastCommit}</p>
      <a href={repoLink} rel="noreferrer" target="_blank">
        {repoLink}
      </a>
      <br></br>
      <a href={codeLink} rel="noreferrer" target="_blank">
        {codeLink}
      </a>
    </div>
  );
}
