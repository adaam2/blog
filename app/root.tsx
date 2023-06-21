import { type MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Main from "./layouts";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Adaam;
    src: url(/font.woff2) format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: AdaamLight;
    src: url(/font-light.woff2) format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: subpixel-antialiased;
    margin: 0;
    tab-size: 4;
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
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
    font-family: Adaam, serif;
    margin: 1.38rem 0 1.38rem;
    color: ${theme.palette.headingColor};
    line-height: 1.3;
    letter-spacing: -0.35px;
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
    color: #009AD7;
    font-weight: 600;
  }
`;

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/font.woff2"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon:ital@0;1&family=Oxygen:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
        <GlobalStyle />
        {typeof document === "undefined" ? "__STYLES__" : null}
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
