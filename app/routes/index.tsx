import { Link, useLoaderData } from "remix";
import styled from 'styled-components'

import { getPosts } from "~/utils/post";
import type { Post } from "~/utils/post";

export const loader = async () => {
  return getPosts();
};


const List = styled.ul`
  list-style-type: square;
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
    <List>
      {posts.map((post) => (
        <ListItem>
          <Link to={post.slug}>
            [{new Date(post.date).toLocaleDateString()}] {post.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
