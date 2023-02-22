import { useLoaderData } from "@remix-run/react";
import styled from 'styled-components'

import { getPosts } from "~/utils/post";
import type { Post } from "~/utils/post";
import theme from "~/theme";

export const loader = async () => {
  return getPosts();
};

const Divider = styled.hr`
  margin: 20px 0;
  border: 1px solid #fafafa;
`;

const IntroArea = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-flow: row;
  align-items: flex-start;

  h2 {
    margin-top: 0;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    color: ${theme.palette.accents.grey};

    span {
      &:after {
        content: '•';
        width: 5px;
        margin-right: 7px;
        margin-left: 7px;
        color: ${theme.palette.accents.grey};
      }

      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
`;

const Avatar = styled.img`
  max-width: 65px;
  border-radius: 50%;
  padding: 3px;
  border: 3px solid #f2f2f2;
  margin-left: auto;
`

const IntroBlock = styled.div`
  display: flex;
  flex-flow: column;
`

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <>
      <IntroArea>
        <IntroBlock>
        <h2>
          adam bull
        </h2>

        <p>
          <span>
            Founding Software Engineer at <a target="_blank" href="https://keel.xyz">keel.xyz</a>
          </span>
          <span>
            Poole, United Kingdom
          </span>
        </p>
        </IntroBlock>
        <Avatar src="https://avatars.githubusercontent.com/u/2907389?v=4"/>

        <Divider />
      </IntroArea>

      <p>
        I am an experienced polyglot software engineer with a particular interest in the developer tooling space. I've worked at a wide range of startups, ranging from tiny teams of two or three people to massive corporations of thousands of people.
      </p>

      <p>
        At the moment I am working with the lovely people at <a href="keel.xyz" target="_blank">keel.xyz</a> - we're building a declarative schema language and accompanying runtime from scratch, which will remove a significant amount of complexity in development of backend services, and allow teams to focus on creating delightful experiences for their users.
      </p>

      <p>
        I love to work in languages that prioritize great developer experience - some of my favourites are Ruby and Golang. At the moment, I'm mostly working in Golang and TypeScript in a professional capacity. At home, well, I have a newborn, so there is no coding in my personal time anymore!!
      </p>

      <p>
        Adam
        <br/>
        xxx
      </p>
    </>
  );
}
