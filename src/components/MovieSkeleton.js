import styled from 'styled-components';
import mixins from 'mixins';

const MovieSkeleton = {
  Section: styled.section`
    background: #f4f4f5;
    max-width: 100%;
    height: 100%;
    ${mixins.animatePulse};
    ${mixins.sm`
      padding: 2rem 1.5rem;
      height: 510px;
      display: flex;
      align-items: center;
    `}
  `,
  Poster: styled.div`
    width: 100%;
    height: 400px;
    background-color: #e4e4e7;
    ${mixins.sm`
      min-width: 300px;
      max-width: 300px;
      ${mixins.rounded('md')};
    `}
  `,
  Title: styled.div`
    height: 2.5rem;
    width: 100%;
    margin-bottom: 2rem;
    background-color: #e4e4e7;
    ${mixins.rounded('sm')};
    ${mixins.sm`
      width: 80%;
    `}
  `,
  Line: styled.div`
    height: 1rem;
    width: ${props => props.width};
    background-color: #e4e4e7;
    ${mixins.rounded('sm')};
  `,
  Info: styled.div`
    max-width: 100%;
    padding: 0 1rem 2rem 1rem;
    ${mixins.spaceY('0.5rem')}
    ${mixins.sm`
      width: 100%;
    `}
  `,
};

export default MovieSkeleton;
