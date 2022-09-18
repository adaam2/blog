import { Link, useLoaderData } from "remix";
import styled from 'styled-components'

import { getPosts } from "~/utils/post";
import type { Post } from "~/utils/post";

export const loader = async () => {
  return getPosts();
};


const List = styled.ul`
  list-style-type: "😎 ";
`
const ListItem = styled.li`
  a {
    color: white;
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
        Welcome to my website. It's a bit bare at the moment as "cool shit" is currently gestating behind the scenes, but <em>for now</em>, you're stuck with this steaming pile of crap. Enjoy!
      </p>

      <h2>
        I (sometimes) write...
      </h2>
      <List>
        {posts.map((post) => (
          <ListItem>
            <Link to={post.slug}>
              <em>{post.title} (published {new Date(post.date).toLocaleDateString()})</em>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
