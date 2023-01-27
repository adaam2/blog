import { ReactElement } from "react"
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

const Main = ({ children }: MainProps) => {
  return (
    <El>
      <div>
        {children}
      </div>
    </El>
  )
}

export default Main;
