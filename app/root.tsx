import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import Main from "./layouts";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    line-height: 1.5;
    tab-size: 4;
    font-size: 18px;
    background: ${theme.palette.bg};
    color: ${theme.palette.fg};
  }

  ul, ol {
    padding-left: 20px;
    margin: 0;
  }

  p {
    line-height: 1.75;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 3rem 0 1.38rem;
    font-weight: 900;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {font-size: 2.441rem;}

  h3 {font-size: 1.953rem;}

  h4 {font-size: 1.563rem;}

  h5 {font-size: 1.25rem;}

  h6 {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: ${theme.palette.accents.yellow};
    font-weight: 600;
  }
`

export const meta: MetaFunction = () => {
  return { title: "adaam.co.uk" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
        <GlobalStyle />
        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Main>
            <Outlet />
          </Main>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
