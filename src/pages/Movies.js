import { useState } from 'react';
import styled from 'styled-components';
import mixins from 'mixins';
import useSWR from 'swr';
import fetcher from 'fetcher';
import { Layout } from 'layout';
import {
  CardSkeleton,
  Container,
  ErrorMessage,
  MovieCard,
  MovieSkeleton,
  Pagination,
  PersonCard,
  Slider,
} from 'components';
// TODO: Import the react-router-dom dependencies here

const HeaderSection = styled.section`
  background: black;
  max-width: 100%;
  height: 100%;
  color: white;
  ${mixins.sm`
    padding: 2rem 1.5rem;
    height: 510px;
    display: flex;
    align-items: center;
    ${mixins.gradient({
      direction: 'to bottom right',
      from: 'rgba(0, 0, 0, 1)',
      to: 'rgba(0, 0, 0, 0.5)',
      url: props => props.src,
    })},
  `}
`;

const MainSection = styled.section`
  padding: 2rem 1rem;
  ${mixins.sm`
    padding: 2rem 1.5rem;
  `}

  h1 {
    margin-bottom: 1.5rem;
  }
`;

const Sections = styled.div`
  ${mixins.spaceY('3rem')}
  & > section {
    ${mixins.spaceY('1.5rem')}
  }
`;

const MovieHeader = styled.div`
  display: flex;
  flex-direction: column;
  ${mixins.spaceY('2.5rem')}
  ${mixins.sm`
    flex-direction: row;
    align-items: center;
    ${mixins.spaceY('0rem')}
    ${mixins.spaceX('2.5rem')}
  `}
`;

const Poster = styled.img`
  max-width: 100%;
  ${mixins.sm`
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    max-width: 300px;
    ${mixins.rounded('md')}
  }`}
`;

const Info = styled.div`
  color: white;
  padding: 0 1rem 2rem 1rem;

  h1 {
    font-weight: 600;
    ${mixins.text('4xl')}
    margin-bottom: 0.5rem;
  }
  h2 {
    ${mixins.text('lg')}
    margin-top: 2rem;
  }
  p {
    ${mixins.text('lg')}
    margin-top: 0.5rem;
  }
  span {
    ${mixins.text('sm')}
  }
`;

const Score = styled.span`
  border: 1px solid white;
  padding: 0.05rem 0.5rem;
  margin-right: 0.5rem;
`;

const Wrapper = styled.div`
  padding: 2rem 1rem;
  ${mixins.sm`
    padding: 2rem 1.5rem;
  `}
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  padding-bottom: 1rem;
  ${mixins.sm`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `};
  ${mixins.lg`
    grid-template-columns: repeat(4, minmax(0, 1fr));
  `};
  ${mixins._2xl`
    grid-template-columns: repeat(5, minmax(0, 1fr));
  `};
`;

const PaginationWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

const Movies = () => {
  // 1. TODO: Retrieve the browser's history instance
  const history = null;
  // 2. TODO: Retrieve the location object that represents the current URL
  const location = null;
  // 3. TODO: Parse the URL query strings using URLSearchParams
  const query = new URLSearchParams('');

  const [pageIndex, setPageIndex] = useState(
    parseInt(query.get('page'), 10) || 1
  );

  // 4. TODO: Retrieve the URL parameters (type and id)
  const { type, id } = {};

  const tv = type === 'shows';

  const { data, error } = useSWR(
    () =>
      id
        ? `/${tv ? 'tv' : 'movie'}/${id}`
        : `/discover/${tv ? 'tv' : 'movie'}?page=${pageIndex}`,
    fetcher
  );

  const { data: credits, error: errorCredits } = useSWR(
    () => (id ? `/${tv ? 'tv' : 'movie'}/${id}/credits` : null),
    fetcher
  );

  const handleOnPageChange = newPage => {
    // Update page state variable + path
    setPageIndex(newPage);

    // 5. TODO: add the new page index into the URL by pushing a new entry on the browser's history stack
    // ...

    // Scroll to top
    window.scrollTo(0, 0);
  };

  const renderSection = (title = '', data) => (
    <section>
      <h1>{title}</h1>
      <Slider>
        {!data ? (
          [...new Array(10)].map((_, i) => (
            <CardSkeleton key={i} size={{ height: '320px', width: '200px' }} />
          ))
        ) : data?.length > 0 ? (
          data.map(person => <PersonCard key={person.id} {...person} />)
        ) : (
          <p>Nothing to display...</p>
        )}
      </Slider>
    </section>
  );

  if (error) {
    return (
      <Layout>
        <Container>
          <div style={{ marginTop: '2rem' }}>
            <ErrorMessage>
              Something went wrong! Please try again later.
            </ErrorMessage>
          </div>
        </Container>
      </Layout>
    );
  }

  return id ? (
    <Layout>
      {!data ? (
        <MovieSkeleton.Section>
          <Container>
            <MovieHeader>
              <MovieSkeleton.Poster />
              <MovieSkeleton.Info>
                <MovieSkeleton.Title />
                {[...new Array(5)].map((_, i) => (
                  <MovieSkeleton.Line
                    key={i}
                    width={i === 4 ? '80%' : '100%'}
                  />
                ))}
              </MovieSkeleton.Info>
            </MovieHeader>
          </Container>
        </MovieSkeleton.Section>
      ) : (
        <>
          {/* Movie's info */}
          <HeaderSection
            src={`${process.env.REACT_APP_IMG_BASE_URL}${data.backdrop_path}`}
          >
            <Container>
              <MovieHeader>
                <Poster
                  src={`${process.env.REACT_APP_IMG_BASE_URL}${data.poster_path}`}
                />
                <Info>
                  <h1>
                    {data.title}{' '}
                    {data.release_date ? (
                      <>({new Date(data.release_date).getFullYear()})</>
                    ) : null}
                  </h1>
                  <div>
                    <Score>
                      {data.vote_average > 0
                        ? parseFloat(data.vote_average)?.toFixed(1)
                        : 'NR'}
                    </Score>
                    {data.genres?.map((genre, i) => (
                      <span key={genre.id}>
                        {genre.name}
                        {i < data.genres.length - 1 ? ', ' : null}
                      </span>
                    ))}
                  </div>
                  <h2>Overview</h2>
                  <p>{data.overview}</p>
                </Info>
              </MovieHeader>
            </Container>
          </HeaderSection>

          {/* Cast */}
          <MainSection>
            <Container>
              {errorCredits ? (
                <ErrorMessage>
                  Something went wrong! Please try again later.
                </ErrorMessage>
              ) : (
                <Sections>
                  {renderSection('Cast', credits?.cast)}
                  {renderSection('Crew', credits?.crew)}
                </Sections>
              )}
            </Container>
          </MainSection>
        </>
      )}
    </Layout>
  ) : (
    <Layout>
      <Wrapper>
        <Container>
          <List>
            {data?.results?.length > 0
              ? data.results?.map(item => (
                  <MovieCard
                    key={item.id}
                    path={`/${type}/${item.id}`}
                    {...item}
                  />
                ))
              : [...new Array(10)].map((_, i) => <CardSkeleton key={i} />)}
          </List>
          <PaginationWrapper>
            <Pagination
              currentPage={data?.page ?? 1}
              totalPages={data?.total_pages ?? 1}
              onPageChange={handleOnPageChange}
            />
          </PaginationWrapper>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Movies;
