// import { useLoaderData } from "@remix-run/react";

// import { getPosts } from "~/utils/post";
import Header from "~/components/Header";
// import type { Post } from "~/utils/post";
import Content from "~/layouts/content";

export const loader = async () => {
  return null;
};

export default function Posts() {
  return (
    <>
      <Header />

      <Content>
        <h2>About me</h2>
        <p>
          I am an experienced polyglot software engineer with a particular
          interest in the developer tooling space. I've worked at a wide range
          of startups, ranging from tiny teams of two or three people to massive
          corporations of thousands of people.
        </p>

        <p>
          At the moment I am working with the lovely people at{" "}
          <a href="https://keel.so" target="_blank">
            keel.so
          </a>{" "}
          - we're building a declarative schema language and accompanying
          runtime from scratch, which will remove a significant amount of
          complexity in development of backend services, and allow teams to
          focus on creating delightful experiences for their users.
        </p>

        <p>
          I love to work in languages that prioritize great developer experience
          - some of my favourites are Ruby and Golang. At the moment, I'm mostly
          working in Golang and TypeScript in a professional capacity. At home,
          well, I have a newborn, so there is no coding in my personal time
          anymore!!
        </p>

        <p>
          Adam
          <br />
          xxx
        </p>
      </Content>
    </>
  );
}
