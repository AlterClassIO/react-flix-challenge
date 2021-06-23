import styled from 'styled-components';
import mixins from 'mixins';

const Slider = styled.div`
  display: flex;
  overflow-y: hidden;
  padding-bottom: 1rem;
  ${mixins.spaceX()}
`;

export default Slider;
