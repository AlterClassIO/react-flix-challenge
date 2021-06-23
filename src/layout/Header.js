import styled from 'styled-components';
import mixins from 'mixins';
import { Container, Logo } from 'components';
// TODO: Import the react-router-dom dependencies here

const StyledHeader = styled.header`
  border-bottom: 1px solid #d4d4d8;
  padding: 1rem;
  ${mixins.sm`
    padding: 1rem 1.5rem;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mixins.spaceX()}
  ${mixins.sm`
    justify-content: flex-start;
    ${mixins.spaceX('1.5rem')}
  `}
`;

const Nav = styled.nav`
  display: flex;
  ${mixins.spaceX()}
  & > a:hover {
    color: var(--primary-600);
  }
`;

/* TODO: Add the navigation links
 *  - Render a link to the "/movies" path
 *  - Render a link to the "/shows" path
 *  - The active link (the one who matches the current URL) should be styled differently (text in blue and bolder)
 */
const Header = () => (
  <StyledHeader>
    <Container>
      <Wrapper>
        <Logo />
        <Nav>{/* TODO: Add your code here */}</Nav>
      </Wrapper>
    </Container>
  </StyledHeader>
);

export default Header;
