import { Link, useLoaderData } from "@remix-run/react";
import styled from 'styled-components'

import { getPosts } from "~/utils/post";
import type { Post } from "~/utils/post";

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

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <>
      <h2>
        Bonjour
      </h2>
      <p>
        Welcome to my website. It's a bit bare at the moment as "cool shit" is currently gestating behind the scenes, but <em>for now</em>, I'm afraid that you're stuck with this. Enjoy! 😊
      </p>

      <h2>
        I (rarely) write...
      </h2>
      <List>
        {posts.map((post) => (
          <ListItem>
            <Link to={post.slug}>
              {post.title} (published {new Date(post.date).toLocaleDateString()})
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
