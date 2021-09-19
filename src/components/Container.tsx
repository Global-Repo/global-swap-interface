import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-height: 100vh;
  width: 100%;
  padding: 32px 16px;
  padding-top: 10vh;
  justify-content: normal;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/background/sphere.png'), url('/images/background/sphere1.png'),
      url('/images/background/sphere2.png');
    background-repeat: no-repeat;
    background-size: 250px 250px, 300px 300px, 350px 350px;
    background-position: 5% 0, 20% 60%, 95% 30%;
  }
`

export default Container
