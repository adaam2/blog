import { ReactElement } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import theme from '~/theme'

const El = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  @media screen and (max-width: 960px) {
    max-width: 900px;
    margin: 25px 20px;
  }
`

interface MainProps {
  children: ReactElement
}

const NavEl = styled.nav`
  border-bottom: 1px solid white;
  margin-bottom: 50px;
`;

const NavBrand = styled.div`
  h1 {
    letter-spacing: .02px;
  }

  @media screen and (max-width: 960px) {
    h1 {
      font-size: 8vw;
    }
  }
`

interface AccentedLetterProps {
  color: string
}

const AccentedLetter = styled.span<AccentedLetterProps>`
  display: inline;
  text-transform: uppercase;
  margin-right: 4px;
  color: ${({ color }) => (theme.palette.accents as any)[color]};
`

const Nav = () => {
  return (
    <NavEl>
      <NavBrand>
        <Link to="/">
          <h1>
            <AccentedLetter color="red">
              adam
            </AccentedLetter>
            <AccentedLetter color="green">
              james
            </AccentedLetter>
            <AccentedLetter color="yellow">
              bull
            </AccentedLetter>
          </h1>
        </Link>
      </NavBrand>
    </NavEl>
  )
}

const Main = ({ children }: MainProps) => {
  return (
    <El>
      <Nav />

      <div>
        {children}
      </div>
    </El>
  )
}

export default Main;
