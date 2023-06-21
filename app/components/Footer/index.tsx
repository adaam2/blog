import styled from "styled-components";
import theme from "~/theme";

const El = styled.div`
  padding: 1em;
  background: ${theme.palette.headers.lime};
  display: flex;
  flex-flow: row;
  justify-content: center;

  h2 {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const IntroBlock = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 960px;
  font-size: 48px;
  margin: 100px auto;

  @media screen and (max-width: 960px) {
    max-width: 900px;
  }

  @media screen and (max-width: 660px) {
    max-width: 600px;
  }

  h1,
  img,
  p {
    text-align: center;
    margin: 5px 0;
  }
`;

const Footer = () => (
  <El>
    <IntroBlock>
      <p>👻</p>
    </IntroBlock>
  </El>
);

export default Footer;
