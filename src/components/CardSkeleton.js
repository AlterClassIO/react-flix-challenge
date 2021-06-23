import styled from 'styled-components';
import mixins from 'mixins';

const CardSkeleton = styled.div`
  min-width: ${props => props?.size?.width || '250px'};
  height: ${props => props?.size?.height || '530px'};
  background-color: #e4e4e7;
  ${mixins.rounded('md')}
  ${mixins.animatePulse}
`;

export default CardSkeleton;
