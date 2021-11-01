import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    //background: linear-gradient(45deg, #1748a0, #0b2761 ,#1c102b);
    //background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }

  #StyledNavCustom {
    background: #F8F6FB !important
  }
  #StyledNavCustom a{
    color: #000000;
    font-weight:600;
  }
  #StyledNavCustom a.active {
    border-bottom: 1px solid #000000;
  }

  nav > div {
    max-width: 1410px;
  }
  nav > div > div > a > div > div {
    display: none !important;
  }
  #walletButtomCustom > div > div > span {
    -webkit-text-fill-color: #FF0000;
    color: #FF0000;
    font-weight: 600;
  }
  nav > div > div > div > div > span {
    -webkit-text-fill-color: #FF0000 !important;
    background: linear-gradient( to right,#FF0000,#FF0000 );
  }
  nav > div > div svg {
    fill:#000000;
  }


  // connect wallet styles 
  #connect_wallet_modal, #modal_wallet_open {
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgb(179 165 209 / 30%);
    border-radius: 32px;
  }
  #connect_wallet_modal > div > button {
    background: #F0ECF4;
  }
  #connect_wallet_modal > div > button > div {
    color: #000000;
  }
  #connect_wallet_modal h2, #modal_wallet_open h2 {
    color: #000000;
  }
  #connect_wallet_modal > div, #modal_wallet_open > div {
    background-image: none !important;
    border-bottom: 0px;
  }
  #connect_wallet_modal > div > a {
    color: #000000;
  }
  #close_dialog svg {
    fill: #000000;
  }
  #connect_wallet_modal > div > a > svg {
    fill: #000000;
  }


  #walletButtomCustom > div > div:before
  {
   background: #FF0000;
  }
  #walletButtomCustom > div > div > span
  {
   -webkit-text-fill-color: #FF0000;
   color: #FF0000;
  }
  #walletButtomCustom button{
    background: #FF0000;
    font-weight: 400;
    border-radius: 10px;
    box-shadow: none;
    :after{
      content:none;
    }
  }

  #modal_wallet_open > div > div {
      color: #000000;
  }

`

export default GlobalStyle
