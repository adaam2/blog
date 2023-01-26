import { ReactElement } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

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

const Nav = () => {
  return (
    <NavEl>
      <NavBrand>
        <Link to="/">
          <h1>
            ajb
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
