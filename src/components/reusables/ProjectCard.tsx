import { ProjectInfo } from 'utils/types';
import React from 'react';
import styled from 'styled-components';

//styles for each individual project display
const StyledProjectCard = styled.div`
  border: 1px solid red;
`;
export default function ProjectCard({
  props: { name, description, lastCommit, repoLink, imgLink, codeLink, technologies },
}: {
  props: ProjectInfo;
}) {
  return (
    <StyledProjectCard className="project-card">
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
    </StyledProjectCard>
  );
}
