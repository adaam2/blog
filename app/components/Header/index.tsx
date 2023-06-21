import styled from "styled-components";
import theme from "~/theme";

const Avatar = styled.img`
  max-width: 156px;
  border-radius: 50%;
  padding: 3px;
  border: 3px solid #f2f2f2;
`;

const LogoLinks = styled.span`
  display: inline-flex;

  a {
    margin-right: 15px;

    i {
      font-size: 45px;
      color: #666 !important;
    }

    &:hover {
      i {
        color: initial !important;
      }
    }
  }
`;

const El = styled.div`
  margin-bottom: 60px;
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

const Divider = styled.hr`
  margin: 20px 0;
  border: 1px solid #fafafa;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 960px;
  margin: 100px auto;

  @media screen and (max-width: 960px) {
    max-width: 900px;
    margin: 25px 20px;
  }

  h1,
  img,
  p {
    text-align: center;
    margin: 5px 0;
  }
`;

const Header = () => (
  <El>
    <IntroBlock>
      <Avatar src="https://avatars.githubusercontent.com/u/2907389?v=4" />

      <h1>adam bull</h1>

      <p>
        <span>
          Founding Engineer at{" "}
          <a target="_blank" href="https://keel.so">
            keel.so
          </a>
        </span>
      </p>

      <Divider />
      <LogoLinks>
        <a target="_blank" href="https://github.com/adaam2">
          <i className="devicon-github-original colored"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/adaam2/">
          <i className="devicon-linkedin-plain"></i>
        </a>
      </LogoLinks>
    </IntroBlock>
  </El>
);

export default Header;
