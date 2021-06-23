import styled from "styled-components";
import { Header, Footer } from "layout";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1 1 0%;
`;

const Layout = ({ children = null }) => (
  <StyledLayout>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </StyledLayout>
);

export default Layout;
