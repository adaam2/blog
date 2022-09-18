import { Link, useLoaderData } from "remix";

import Card, { CardGrid } from '~/components/Card'
import { getPosts } from "~/utils/post";
import type { Post } from "~/utils/post";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <CardGrid>
      {posts.map((post) => (
        <Link key={post.slug} to={post.slug}>
          <Card label={new Date(post.date).toLocaleDateString()} title={post.slug}>
            {post.title}
          </Card>
        </Link>
      ))}
    </CardGrid>
  );
}
