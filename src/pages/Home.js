import styled from 'styled-components';
import mixins from 'mixins';
import useSWR from 'swr';
import fetcher from 'fetcher';
import { Layout } from 'layout';
import { CardSkeleton, Container, MovieCard, Slider } from 'components';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  ${mixins.sm`
    padding: 2rem 1.5rem;
  `}
`;

const Sections = styled.div`
  ${mixins.spaceY('3rem')}
  & > section {
    ${mixins.spaceY('1.5rem')}
  }
`;

const Home = () => {
  const { data: movies, error: moviesError } = useSWR(
    `/trending/movie/week`,
    fetcher
  );
  const { data: shows, error: showsError } = useSWR(
    `/trending/tv/week`,
    fetcher
  );

  /* TODO: Pass the 'path' prop to the <MovieCard /> component
   *  - The path should point to the corresponding movie/show route
   *  - Use the 'type' argument and the item's id to compose the path's value
   */
  const renderSection = (title = '', type = 'movies', data, error) => (
    <section>
      <h1>{title}</h1>
      <Slider>
        {error ? (
          <p>Something went wrong! Please try again later.</p>
        ) : data?.results ? (
          data.results.map(item => <MovieCard key={item.id} {...item} />)
        ) : (
          [...new Array(10)].map((_, i) => <CardSkeleton key={i} />)
        )}
      </Slider>
    </section>
  );

  return (
    <Layout>
      <Wrapper>
        <Container>
          <Sections>
            {renderSection(
              'Most popular movies',
              'movies',
              movies,
              moviesError
            )}
            {renderSection('Most popular shows', 'shows', shows, showsError)}
          </Sections>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Home;
