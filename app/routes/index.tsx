import { Link, useLoaderData } from "@remix-run/react";
import styled from 'styled-components'

import { getPosts } from "~/utils/post";
import type { Post } from "~/utils/post";
import theme from "~/theme";

export const loader = async () => {
  return getPosts();
};


const List = styled.ul`
  list-style-type: disc;
`
const ListItem = styled.li`
  a {
    font-weight: 400;
  }
`

const Divider = styled.hr`
  margin: 20px 0;
  border: 1px solid #fafafa;
`;

const IntroArea = styled.div`
  margin-bottom: 30px;

  h2 {
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

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <>
      <IntroArea>
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

        <Divider />
      </IntroArea>

      <p>
        Welcome to my website. It's a bit bare at the moment as "cool shit" is currently gestating behind the scenes, but <em>for now</em>, I'm afraid that you're stuck with this. Enjoy! 😊
      </p>

      <p>
        Adam
        <br/>
        xxx
      </p>
    </>
  );
}
