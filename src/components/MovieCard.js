import styled from 'styled-components';
import mixins from 'mixins';
// TODO: Import the react-router-dom dependencies here

const formatDate = date =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

const Card = styled.div`
  ${mixins.rounded('md')}
  border: 1px solid rgba(209, 213, 219, 0.5);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  min-width: 200px;
  max-width: 640px;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Info = styled.div`
  padding: 1rem 1rem;
  ${mixins.spaceY('0.25rem')}

  & > p:first-of-type {
    font-weight: 600;
    ${mixins.text('lg')}
  }

  & > p:last-of-type {
    color: #71717a;
  }
`;

const Score = styled.span`
  ${mixins.rounded('full')}
  ${mixins.text('sm')}
  background-color: var(--primary-500);
  font-weight: 600;
  color: white;
  padding: 0.125rem 0.75rem;
`;

/* TODO: Render a link for the <Card /> component instead of a 'div'
 *  - The <Card /> component is a styled component defined above
 *  - Replace the div with the <Link /> component from react router
 *  - Don't forget to pass the 'to' prop when rendering the <Card /> by passing the 'path' argument as the value
 */
const MovieCard = ({
  id,
  name,
  title,
  first_air_date,
  release_date,
  poster_path,
  vote_average,
  path,
}) => {
  const diplayName = name || title;
  const date = first_air_date ? first_air_date : release_date;

  return (
    <Card>
      <Image
        src={`${process.env.REACT_APP_IMG_BASE_URL}${poster_path}`}
        alt={diplayName}
        loading="lazy"
      />
      <Info>
        <Score>
          {vote_average > 0 ? parseFloat(vote_average)?.toFixed(1) : 'NR'}
        </Score>
        <p>{diplayName}</p>
        {date ? <p>{formatDate(new Date(date))}</p> : null}
      </Info>
    </Card>
  );
};

export default MovieCard;
