import styled from "styled-components";
import mixins from "mixins";

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  ${mixins.sm`
    max-width: 640px;
  `}
  ${mixins.md`
    max-width: 768px;
  `}
  ${mixins.lg`
    max-width: 1024px;
  `}
  ${mixins.xl`
    max-width: 1280px;
  `}
  ${mixins._2xl`
    max-width: 1536px;
  `}
`;

const Container = ({ children = null }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
