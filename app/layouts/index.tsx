import { ReactElement } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import theme from '~/theme'

const El = styled.main`
  max-width: 1200px;
  margin: 100px auto;
`

interface MainProps {
  children: ReactElement
}

const NavEl = styled.nav``;
const NavBrand = styled.div`
  h1 {
    letter-spacing: .1px;
  }
`

interface AccentedLetterProps {
  color: string
}

const AccentedLetter = styled.span<AccentedLetterProps>`
  display: inline;
  color: ${({ color }) => (theme.palette.accents as any)[color]};
`

const Nav = () => {
  return (
    <NavEl>
      <NavBrand>
        <Link to="/">
          <h1>
            <AccentedLetter color="green">
              a&nbsp;
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
