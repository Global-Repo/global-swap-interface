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
    background-image: url('/images/background/logo.png'), url('/images/background/logo1.png'), url('/images/background/logo2.png'),
      url('/images/background/logo3.png'), url('/images/background/logo4.png'), url('/images/background/logo5.png');
    background-repeat: no-repeat;
    background-size: 200px 200px, 200px 200px, 400px 400px, 300px 300px, 350px 350px, 500px 500px;
    background-position: 60% 0, 10% 15%, 96% 20%, 5% 40%, 30% 60%, 95% 100%;
  }
`

export default Container
