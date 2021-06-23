import { createGlobalStyle } from 'styled-components';
import { useScrollToTop } from 'hooks';
import { Home, Movies, NotFound } from 'pages';
// TODO: Import the react-router-dom dependencies here

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-500: #0EA5E9;
    --primary-600: #0284C7;
    --primary-700: #0369A1;
  }

  body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin: 0;
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`;

function ScrollToTop({ children = null }) {
  useScrollToTop();
  return children;
}

/* TODO: Enable routing and create the routes of your application
 *  - Render the <Home /> page when the URL matches (exactly) "/"
 *  - Render the <Movies /> page when the URL matches /movies/:id or /shows/:id
 *      - "movies" and "shows" should be an URL parameter named type
 *      - Anything other than /movies and /shows should not match this route (hint: use a regexp)
 *      - The "id" parameter is optional
 *  - Render the <NotFound /> page when the URL matches /404
 *  - Redirect the user to /404 when no route matches
 *  - Make sure to render only the first route that matches (hint: use the Switch component)
 *  - [OPTIONAL] Wrap all your routes inside the <ScrollToTop /> component scroll the window up on every navigation
 */
export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* TODO: Add your code here */}
    </>
  );
}
