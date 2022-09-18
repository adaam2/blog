import { ReactElement } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import theme from '~/theme'

const El = styled.main`
  max-width: 1200px;
  margin: 20px 10px;

  @media screen and (max-width: 960px) {
    max-width: 960px;
  }
`

interface MainProps {
  children: ReactElement
}

const NavEl = styled.nav``;
const NavBrand = styled.div`
  h1 {
    letter-spacing: .1px;
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
  color: ${({ color }) => (theme.palette.accents as any)[color]};
`

const Nav = () => {
  return (
    <NavEl>
      <NavBrand>
        <Link to="/">
          <h1>
            <AccentedLetter color="red">
              a
            </AccentedLetter>
            <AccentedLetter color="red">
              d
            </AccentedLetter>
            <AccentedLetter color="red">
              a
            </AccentedLetter>
            <AccentedLetter color="red">
              m&nbsp;
            </AccentedLetter>
            <AccentedLetter color="green">
              j
            </AccentedLetter>
            <AccentedLetter color="green">
              a
            </AccentedLetter>
            <AccentedLetter color="green">
              m
            </AccentedLetter>
            <AccentedLetter color="green">
              e
            </AccentedLetter>
            <AccentedLetter color="green">
              s&nbsp;
            </AccentedLetter>
            <AccentedLetter color="yellow">
              b
            </AccentedLetter>
            <AccentedLetter color="yellow">
              u
            </AccentedLetter>
            <AccentedLetter color="yellow">
              l
            </AccentedLetter>
            <AccentedLetter color="yellow">
              l
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
      {children}
    </El>
  )
}

export default Main;
