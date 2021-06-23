import styled from "styled-components";
import mixins from "mixins";
import { Container } from "components";

const StyledFooter = styled.footer`
  padding: 1rem;
  margin-top: 4rem;
  text-align: center;
  color: #71717a;
  ${mixins.sm`
    padding: 1rem 1.5rem;
  `}
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <p>© {new Date().getFullYear()} AlterClass. All rights reserved.</p>
    </Container>
  </StyledFooter>
);

export default Footer;
