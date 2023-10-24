import styled from "styled-components";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

const El = styled.div`
  max-width: 960px;
  margin: 100px auto;
  margin-bottom: 150px;

  @media screen and (max-width: 960px) {
    max-width: 900px;
    margin: 0 20px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 660px) {
    max-width: 600px;
  }
`;

const Content = ({ children }: ContentProps) => <El>{children}</El>;

export default Content;
