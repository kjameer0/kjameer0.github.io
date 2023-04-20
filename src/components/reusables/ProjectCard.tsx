import { ProjectInfo } from 'utils/types';
export default function ProjectCard({
  props: { name, description, lastCommit, repoLink, imgLink, codeSandboxLink },
}: {
  props: ProjectInfo;
}) {
  return (
    <>
      <p>{name}</p>
      <p>{description}</p>
      <p>{lastCommit}</p>
      <p>{repoLink}</p>
      <p>{}</p>
    </>
  );
}
