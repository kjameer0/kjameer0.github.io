import { ProjectInfo } from 'utils/types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//helpers
import { convertRepoStringToTitle } from 'utils/helpers';

//styles for each individual project display
const StyledProjectCard = styled.div`
  border: 1px solid white;
  width: 270px;
  margin: 1rem 1rem;
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
  const [lastCommitDate, setLastCommitDate] = useState('');
  useEffect(() => {
    async function fetchLastCommit() {
      try {
        const repo_url = `https://api.github.com/repos/kjameer0/${name}`;
        const response = await fetch(repo_url);
        if (response.ok) {
          const data = await response.json();
          setLastCommitDate(data.pushed_at);
        } else {
          throw new Error('data not found');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchLastCommit();
  }, []);
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
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      <p>
        <strong>Last Commit: </strong>
        {lastCommitDate || 'N/A'}
      </p>
      <a href={repoLink} rel="noreferrer" target="_blank">
        Click here to see Repository
      </a>
      <br></br>
      <a href={codeLink} rel="noreferrer" target="_blank">
        Click here to see it in action!
      </a>
    </StyledProjectCard>
  );
}
