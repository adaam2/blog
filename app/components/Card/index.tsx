import { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1em;
  position: relative;
  display: flex;
  font-weight: 900;
  font-size: 40px;
  height: 100%;
  align-items: center;
  padding: 20px auto;
  color: ${({ theme }) => theme.palette.fgAlternate};
  background: ${({ theme }) => theme.palette.accents.yellow};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.fgAlternate};
    background: ${({ theme }) => theme.palette.fg};
  }
`

const Label = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 22px;
  padding: 6px 14px;
  right: 0;
  color: ${({ theme }) => theme.palette.fgAlternate};
  background: white;
`

interface WithChildrenProps {
  children: ReactNode
}

interface CardProps extends WithChildrenProps {
  title: string
  label: string
}

const Card = ({ children, title, label }: CardProps) => {
  return (
    <Wrapper title={title}>
      {children}

      <Label>
        {label}
      </Label>
    </Wrapper>
  )
}

const CardGridWrapper = styled.div`
  display: grid;
  margin: 50px 0;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`

interface CardGridProps extends WithChildrenProps {

}

export const CardGrid = ({ children }: CardGridProps) => {
  return (
    <CardGridWrapper>
      {children}
    </CardGridWrapper>
  )
}

export default Card;
