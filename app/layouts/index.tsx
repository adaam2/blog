import { ReactElement } from "react";
import styled from "styled-components";

const El = styled.div``;

interface MainProps {
  children: ReactElement;
}

const Main = ({ children }: MainProps) => {
  return <El>{children}</El>;
};

export default Main;
