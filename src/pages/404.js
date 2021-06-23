import styled from 'styled-components';
import mixins from 'mixins';
import { Layout } from 'layout';
import { Container } from 'components';
// TODO: Import the react-router-dom dependencies here

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  ${mixins.sm`
    padding: 2rem 1.5rem;
  `}

  h1 {
    margin: 2rem 0;
    ${mixins.text('4xl')}
  }
`;

/* TODO: Add a link to go back to the homepage
 */
const Home = () => (
  <Layout>
    <Wrapper>
      <Container>
        <h1>404 - Not found</h1>
        {/* TODO: Add your code here */}
      </Container>
    </Wrapper>
  </Layout>
);

export default Home;
