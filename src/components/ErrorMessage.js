import styled from "styled-components";
import mixins from "mixins";

const ErrorMessage = styled.p`
  ${mixins.rounded("md")};
  color: #ef4444;
  background-color: #fee2e2;
  padding: 1rem 2rem;
  max-width: max-content;
  margin: 0 auto;
  text-align: center;
`;

export default ErrorMessage;
