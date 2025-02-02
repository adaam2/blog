import parseFrontMatter from "front-matter";
import fs from "fs/promises";
import path from "path";
import { bundleMDX } from "./mdx.server";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import ruby from "highlight.js/lib/languages/ruby";

export type Post = {
  slug: string;
  title: string;
  date: Date;
};

export type PostMarkdownAttributes = {
  title: string;
};

export async function getPost(slug: string) {
  const source = await fs.readFile(
    path.join(`${__dirname}/../../blog-posts`, slug + ".mdx"),
    "utf-8"
  );
  const [rehypeHighlight] = await Promise.all([
    import("rehype-highlight").then(mod => mod.default),
  ]);
  const { default: remarkGfm } = await import("remark-gfm");
  const { default: rehypeAutolinkHeadings } = await import(
    "rehype-autolink-headings"
  );

  const { default: rehypeToc } = await import("rehype-toc");
  const { default: rehypeSlug } = await import("rehype-slug");

  const post = await bundleMDX({
    source,
    xdmOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // remarkMdxImages,
        remarkGfm,
        // remarkBreaks,
        // [remarkFootnotes, { inlineNotes: true }],
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings,
        rehypeSlug,
        rehypeToc,
        [
          rehypeHighlight,
          { format: "detect", ignoreMissing: true, languages: { javascript, typescript, ruby } },
        ],
      ];

      return options;
    },
  }).catch((e) => {
    console.error(e);
    throw e;
  });

  return post;
}

export async function getPosts() {
  const postsPath = await fs.readdir(`${__dirname}/../../blog-posts`, {
    withFileTypes: true,
  });

  const posts = await Promise.all(
    postsPath.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../../blog-posts`, dirent.name)
      );
      const { attributes } = parseFrontMatter(file.toString());
      return {
        slug: dirent.name.replace(/\.mdx/, ""),
        //@ts-ignore
        title: attributes.title,
        //@ts-ignore
        date: Date.parse(attributes.date)
      };
    })
  );
  return posts;
}
