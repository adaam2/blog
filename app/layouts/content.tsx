import styled from "styled-components";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

const El = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1em;

  @media screen and (max-width: 960px) {
    max-width: 900px;
    margin: 0 40px;
  }
`;

const Content = ({ children }: ContentProps) => <El>{children}</El>;

export default Content;
