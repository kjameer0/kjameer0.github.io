import { ProjectInfo } from 'utils/types';
export default function ProjectCard({
  props: { name, description, lastCommit, repoLink, imgLink, codeLink },
}: {
  props: ProjectInfo;
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgLink} alt={name} />
      <p>{description}</p>
      <p>{lastCommit}</p>
      <p>{repoLink}</p>
      <p>{codeLink}</p>
    </div>
  );
}
