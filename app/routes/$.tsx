import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { useLoaderData, useParams } from "@remix-run/react";
import { json, LoaderFunction } from '@remix-run/node'
import { getPost } from "~/utils/post";
import 'highlight.js/styles/default.css';

type LoaderData = {
  frontmatter: any;
  code: string;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const slug = params["*"];
  if (!slug) throw new Response("Not found", { status: 404 });

  try {
    const post = await getPost(slug);

    if (post) {
      const { frontmatter, code } = post;

      return json({ frontmatter, code });
    }
  } catch (e) {
    throw new Response("Not found", { status: 404 });
  }
};

export function CatchBoundary() {
  const params = useParams();

  return (
    <div>
      <h2>No post matching '{params['*']}'!</h2>

    </div>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/atom-one-dark.min.css",
    },
  ];
}

export default function Post() {
  const { code, frontmatter } = useLoaderData<LoaderData>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      {frontmatter.image && (
        <div className="mb-6 -mt-6">
          <div className="text-center">
            <div>
              <img
                src={frontmatter.image.url}
                className="object-cover object-center w-full"
              />
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Credit:{" "}
              <a href={frontmatter.image.credit.url}>
                {frontmatter.image.credit.text}
              </a>
            </p>
          </div>
        </div>
      )}

      <h1 className="my-20">{frontmatter.title}</h1>

      <Component attributes={frontmatter} />
    </>
  );
}
