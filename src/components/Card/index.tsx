import styled from 'styled-components'

const Card = styled.div<any>`
  width: 100%;
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  /* border: 1px solid ${({ theme }) => theme.colors.invertedContrast}; */
  background-color: #F0ECF4;
`

export const GreyCard = styled(Card)`
  background-color: #F0ECF4;
  color: black !important;
`
