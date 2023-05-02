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
  a:link {
    color: lightblue;
  }
  a:visited {
    color: purple;
  }
`;
export default function ProjectCard({
  props: { name, description, repoLink, imgLink, codeLink, technologies },
}: {
  props: ProjectInfo;
}) {
  const [lastPushedDate, setlastPushedDate] = useState('');
  useEffect(() => {
    async function fetchLastPushDate() {
      try {
        //fetch this projects repo data
        const repo_url = `https://api.github.com/repos/kjameer0/${name}`;
        const response = await fetch(repo_url);
        if (response.ok) {
          //get the last pushed date and convert it to an easily readable date
          const data = await response.json();
          const date = data.pushed_at;
          //take take from API and remove punctuation
          const splitDate = date.split(/-|:|T/);
          //the year month and day are the first 3 indices of the split array
          //rearrange those to be mm//dd/yyyy
          [splitDate[0], splitDate[1], splitDate[2]] = [splitDate[1], splitDate[2], splitDate[0]];
          //set date to state to save it
          setlastPushedDate(splitDate.slice(0, 3).join('/'));
        } else {
          throw new Error('data not found');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchLastPushDate();
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
        {lastPushedDate || 'N/A'}
      </p>
      <a href={repoLink} rel="noreferrer" target="_blank">
        Click here to see Repository
      </a>
      <br></br>
      {codeLink.length > 0 && (
        <a href={codeLink} rel="noreferrer" target="_blank">
          Click here to see it in action!
        </a>
      )}
    </StyledProjectCard>
  );
}
