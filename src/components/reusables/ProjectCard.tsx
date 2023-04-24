import { ProjectInfo } from 'utils/types';
import React from 'react';
import styled from 'styled-components';
//helpers
import { convertRepoStringToTitle } from 'utils/helpers';

//styles for each individual project display
const StyledProjectCard = styled.div`
  border: 0px solid red;
  width: 33%;
  h2 {
    text-align: center;
    font-weight: 800;
    font-size: 1.5rem;
  }
  .img-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  strong {
    color: white;
    font-weight: 800;
  }
`;
export default function ProjectCard({
  props: { name, description, lastCommit, repoLink, imgLink, codeLink, technologies },
}: {
  props: ProjectInfo;
}) {
  return (
    <StyledProjectCard>
      <h2>{convertRepoStringToTitle(name)}</h2>
      <div className="img-wrapper">
        <img src={imgLink} alt={name} />
      </div>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        {' '}
        <strong>Last Commit: </strong>
        {lastCommit || 'N/A'}
      </p>
      <strong>Repo Link: </strong>
      <a href={repoLink} rel="noreferrer" target="_blank">
        Click here to see Repository
      </a>
      <br></br>
      <strong>Check It Out: </strong>
      <a href={codeLink} rel="noreferrer" target="_blank">
        Click here to see it in action!
      </a>
    </StyledProjectCard>
  );
}
