// import { useLoaderData } from "@remix-run/react";

// import { getPosts } from "~/utils/post";
import styled from "styled-components";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
// import type { Post } from "~/utils/post";
import Content from "~/layouts/content";
import theme from "~/theme";

export const loader = async () => {
  return null;
};

const Figure = styled.figure`
  figcaption {
    font-style: italic;
    margin-top: 8px;
    color: ${theme.palette.fgAlternate};
    font-size: 0.9em;
  }
`;

const Photo = styled.img`
  max-width: 400px;
  box-shadow: -50px -50px 0 -40px ${theme.palette.accents.pink},
    50px 50px 0 -40px ${theme.palette.headers.lime};
`;

const SideBySide = styled.div`
  display: flex;
  flex-flow: row;
  gap: 70px;
  align-items: center;

  @media screen and (max-width: 760px) {
    flex-flow: column;
  }
`;

const FlexItem = styled.div``;

export default function Posts() {
  return (
    <>
      <Header />

      <Content>
        <SideBySide>
          <FlexItem>
            <h2>About me</h2>
            <p>
              I am an experienced polyglot software engineer with a particular
              interest in the developer tooling space. I've worked at a wide
              range of startups, ranging from tiny teams of two or three people
              to massive corporations of thousands of people.
            </p>

            <p>
              I love to work in languages that prioritize great developer
              experience - some of my favourites are Ruby and Golang. At the
              moment, I'm mostly working in Golang and TypeScript in a
              professional capacity. At home, well, I have a newborn, so there
              is no coding in my personal time anymore!!
            </p>

            <p>
              Adam
              <br />
              xxx
            </p>
          </FlexItem>
          <FlexItem>
            <Figure>
              <Photo src="/me.jpeg" />
              <figcaption>Winter sun at Kimmeridge Bay, Dorset, UK</figcaption>
            </Figure>
          </FlexItem>
        </SideBySide>
      </Content>

      <Footer></Footer>
    </>
  );
}
