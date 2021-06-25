import { FilmIcon } from '@heroicons/react/outline';
import styled from 'styled-components';
import mixins from 'mixins';
// TODO: Import the react-router-dom dependencies here

const StyledLogo = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--primary-600);
  font-weight: 500;
  letter-spacing: 0.05em;
  ${mixins.spaceX('0.25rem')}
  & > svg {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }
`;

/* TODO: Render a link for the <StyledLogo /> component instead of a 'span'
 *  - The <StyledLogo /> component is a styled component defined above
 *  - Replace the span with the <Link /> component from react router
 *  - Don't forget to pass the 'to' prop to redirect to the homepage
 */
const Logo = () => (
  <StyledLogo>
    <FilmIcon />
    <span>ReactFlix</span>
  </StyledLogo>
);

export default Logo;
