import styled from 'styled-components';
import mixins from 'mixins';
import { UserIcon } from '@heroicons/react/outline';

const Card = styled.div`
  ${mixins.rounded('md')}
  border: 1px solid rgba(209, 213, 219, 0.5);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  min-width: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Placeholder = styled.div`
  max-width: 100%;
  height: 300px;
  background-color: #f4f4f5;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 5rem;
    height: 5rem;
    color: #d4d4d8;
  }
`;

const Info = styled.div`
  padding: 0.5rem;
  ${mixins.spaceY('0.25rem')}

  & > p:first-of-type {
    font-weight: 600;
  }

  & > p:last-of-type {
    color: #71717a;
  }
`;

const PersonCard = ({
  id,
  character,
  department,
  original_name,
  profile_path,
}) => (
  <Card>
    {profile_path ? (
      <Image
        src={`${process.env.REACT_APP_IMG_BASE_URL}${profile_path}`}
        alt={original_name}
        loading="lazy"
      />
    ) : (
      <Placeholder>
        <UserIcon />
      </Placeholder>
    )}
    <Info>
      <p>{original_name}</p>
      <p>{character || department}</p>
    </Info>
  </Card>
);

export default PersonCard;
