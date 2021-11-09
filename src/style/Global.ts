import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    //background: linear-gradient(45deg, #1748a0, #0b2761 ,#1c102b);
    //background-color: ${({ theme }) => theme.colors.background};
    .wZbdH {
      background-color: #F8F6FB !important;
      div {
        color: #090e1a !important;
      }
      .kzhJaq {
        border: none;
        background-color: #F8F6FB !important;
        .krDwpZ {
          a {
            svg {
              fill: #2da9ea
            }
          }
        }
      }
    }
    nav {
      background-color: #F8F6FB !important;
      .bMmavD {
          fill: #2da9ea
      }
    }
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



  nav > div > div > div > div > a.active > div {
    color: red;
  }
  nav > div > div > div > div > a > div {
    color: black;
    font-weight: 600;
  }
  nav > div > div > div > div > button {
    background: #FF0000 !important;
    font-weight: 400 !important;
    border-radius: 10px!important;
    box-shadow: none !important;
  }

  nav > div > div > div > div {
    border-bottom: 0px !important;
  }


  // connect wallet styles 
  #connect_wallet_modal, #modal_wallet_open {
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgb(179 165 209 / 30%);
    border-radius: 32px;
  }
  /* #connect_wallet_modal > div > button {
    background: #F0ECF4;
  } */
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


  //Ajustes diseño
  .cTsiiO {
    background: #F0ECF4 !important; 
  }

  .sc-jSgvzq.sc-GTVdH.kjHPpz.fngJqB {
    background-color: #ffffff;
    border-color: #ffffff;
    border-radius: 38px;
    padding: 9px;
  }

  .sc-jQbJRc.cgthNg {
    border-bottom: none;
  }

  h2.sc-gsTEea.sc-ezredP.hzSzJz.fMjMPQ {
    color: #000000;
  }

  button.sc-hKgJUU.fxfbQi, .sc-hKgJUU.cFJpJu {
    background-color: #F0ECF4;
    border-radius: 14px;
  }

  button.sc-hKgJUU.fxfbQi > div, .sc-hKgJUU.cFJpJu > div {
    color: #000000 !important;
  }

  a.sc-gsTEea.sc-bZSRNg.cTdulV.iPgOee.sc-hzMMVR.hRhSRM {
    color: #000000;
  }
  
  svg.sc-bdfBQB.cghQKL {
    fill: #A099A5;
  }

  svg.sc-bdfBQB.fHIeuj {
    fill: #000000;
  }

  .sc-jQbJRc.cgthNg > button.sc-hKgJUU.dscYhS.sc-eCstlR.rcBnw {
    background-color: #F0ECF4 !important;
    width: 34px;
    height: 34px;
  }

  //Liquidity
  .sc-gsTEea.eRoJCy, .sc-gsTEea.jyVxco {
    color: #ADA7B2;
  }
  .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.kLLItM.bYHcKA.bPftiV > .sc-gsTEea.gxdkmH {
    color: #ADA7B2;
    font-size: 12px;
    text-transform:uppercase;
  }

  a#import-pool-link.sc-kUbgcP.jUgoIo {
    color: #FF0000;
  }

  .sc-dHnuKO.iOnqPq > .sc-fnlXEO.dHArHX {
    display: contents;
    width: 100%;
  }

  .sc-fWPcWZ.sc-gyUflj.sc-iGculD.fWKqck.dsAptE.QPukz > .sc-gsTEea.dwXOcF,
  .sc-fWPcWZ.sc-gyUflj.sc-iGculD.fWKqck.dsAptE.QPukz > .sc-gsTEea.iqlXRe,
  .sc-fWPcWZ.sc-gyUflj.sc-iGculD.fWKqck.dsAptE.QPukz > svg,
  .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.sc-jYCGPb.fWKqck.dsAptE.bPftiV.iImrpo > .sc-gsTEea.dwXOcF,
  .sc-hFXoIY.bAvxys > svg.sc-hYAvtR.htCbuO {
    color: #000000;
  }

  .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.eSsEyc.dsAptE.bPftiV > .sc-hKgJUU.cTsiiO {
    background: red !important;
    color: white;
    border-radius: 16px;
    box-shadow: none;
    width: 100% !important;
  }

  .sc-gVgoRu.lPmhA > .sc-giImIA.tYdTR {
    background-color: #F0ECF4;
    border-radius: 16px;
  }

  .sc-gVgoRu.lPmhA > .sc-giImIA.tYdTR::before {
    background: none;  
  }

  .sc-gVgoRu.dMrDpR > div > .sc-gsTEea.sc-eCjjWe.dShVMB.ewPuxe {
    color: #ADA7B2;
  }

  .sc-gVgoRu.dMrDpR > div > .sc-jVKKMF.sHYtP {
    border: none;
    background-color: #F0ECF4;
  }

  .sc-cbDFGl.sc-hjWSTT.jfkLlw.fMyJmS > .sc-jVKKMF.sHYtP {
    background-color: #FFFFFF;
    border: 2px solid #F0ECF4;
  }

  //Exchange

  .sc-gVgoRu.lPmhA > .sc-idOiZg.bSClbG {
    background-color: #F0ECF4;
  }
  .sc-fWPcWZ.sc-gyUflj.sc-iGculD.fWKqck.dsAptE.QPukz > .sc-gsTEea.djlkUA,
  .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.fWKqck.dsAptE.bPftiV > .sc-gsTEea.djlkUA,
  .sc-fWPcWZ.sc-gyUflj.sc-iGculD.fWKqck.dsAptE.QPukz > .sc-gsTEea.dhMdQp,
  .sc-jSgvzq.sc-gKseQn.kAnWMW.fROjzV > .sc-gsTEea.ijDoII {
    color: #000000;
  }

  .sc-jSgvzq.sc-gKseQn.ksBGrd.dyvDuN {
    border: none !important;
    background-color: #F0ECF4;
  }

  .sc-jSgvzq.sc-gKseQn.ksBGrd.dyvDuN > svg {
    fill: #FF0000;
  }


  //Swap 
  .sc-jSgvzq.sc-gKseQn.cYEeJN.krDwpZ > .sc-irOPex.kgYmcY > button.sc-hKgJUU.cTsiiO {
    background: #FF0000 !important;
  }

  .sc-jSgvzq.sc-GTVdH.kjHPpz.fngJqB.sc-iitrMj.cacIBH > .sc-jSgvzq.sc-gKseQn.sc-fbNZge.PFgis.krDwpZ.eShmzF > .sc-jSgvzq.sc-gKseQn.cTgdUf.bvBYWB > a.sc-gsTEea.sc-bZSRNg.gFsXhE.iPgOee {
    color: #000000 !important;
  }

  .sc-jSgvzq.sc-GTVdH.kjHPpz.fngJqB.sc-iitrMj.cacIBH > .sc-jSgvzq.sc-gKseQn.sc-fbNZge.PFgis.krDwpZ.eShmzF > .sc-jSgvzq.sc-gKseQn.cTgdUf.bvBYWB > svg.sc-bdfBQB.ezxOAG {
    fill: #000000;
  }

  .sc-gVgoRu.sc-hYZPxA.DoDjP.fznxXF > .sc-gVgoRu.lPmhA > .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.fWKqck.eAYkYS.bPftiV > .sc-fWPcWZ.sc-gyUflj.sc-iGculD.fWKqck.dsAptE.jwxXiK > .sc-gsTEea.dTlKPE,
  .sc-gVgoRu.sc-hYZPxA.DoDjP.fznxXF > .sc-gVgoRu.lPmhA > .sc-gVgoRu.kkjNft > .sc-gsTEea.sc-ekbpNA.dwXOcF.cHyllG {
    color: #000000;
  }
  .sc-gVgoRu.sc-hYZPxA.sc-JAcba.lPmhA.fznxXF.cpSPqb > .sc-fWPcWZ.sc-gyUflj.sc-eWVLlQ.fWKqck.dsAptE.Xbttc > button.sc-hKgJUU.dsXkYo {
    background-color: #FF0000;
    box-shadow: none;
  }

  .sc-gVgoRu.sc-hYZPxA.DoDjP.fznxXF > .sc-gVgoRu.lPmhA > .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.fWKqck.eAYkYS.bPftiV > .sc-fWPcWZ.sc-gyUflj.sc-iGculD.fWKqck.dsAptE.jwxXiK > .sc-gsTEea.hXMuLH,
  .sc-gVgoRu.sc-hYZPxA.DoDjP.fznxXF > .sc-gVgoRu.lPmhA > .sc-gVgoRu.kkjNft > .sc-gsTEea.sc-ekbpNA.dwXOcF.cHyllG > span {
    color: #FF0000;
  }

  .sc-huZMQ.jHxaQo > .sc-fybuyZ.sc-jLiVFv.iNkqNE.lbblJE {
    background-color: #F0ECF4;
  }

  .sc-huZMQ.jHxaQo > .sc-fybuyZ.sc-jLiVFv.iNkqNE.lbblJE > .sc-gsTEea.kTRLko {
    color: #ADA7B2;
  }

  .sc-gVgoRu.kdIUTr > .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.fWKqck.dsAptE.bPftiV > .sc-gsTEea.djlkUA > .sc-clhTte.mnpSD {
    background-color: transparent;
  }

  .sc-gVgoRu.kdIUTr > .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.fWKqck.dsAptE.bPftiV > .sc-gsTEea.djlkUA > .sc-clhTte.mnpSD > svg {
    color: #FF0000;
    zoom: 1.1;
  }

  .sc-fWPcWZ.sc-gyUflj.sc-gkdBiK.fWKqck.dsAptE.bPftiV > .sc-gsTEea.djlkUA > .sc-clhTte.mnpSD {
    background-color: transparent !important;
  }



  //Iconos TG y TW
  .sc-gsTEea.sc-bZSRNg.jcCFLd.iPgOee > svg.sc-bdfBQB.bMmavD,
  .sc-gsTEea.sc-bZSRNg.fsFXUb.iPgOee > svg.sc-bdfBQB.bMmavD{
    width: 32px;
  }

  //Botón Connect Wallet
  .sc-dWddBi.cZZjAt > button.sc-hKgJUU.icXFyL::after {
    background: none;
    background-color: #FF0000 !important,
  }

  .sc-jSgvzq.sc-gKseQn.cJbOry.krDwpZ > div > .sc-lmoMya.denqQy::before {
    background: none;
    border: 2px solid #FF0000;
  }

  .sc-dUrmIn.eFdPQd.enter-done > .sc-jSgvzq.sc-gKseQn.sc-jrAFXE.cJbOry.krDwpZ.dlWDxF {
    background-color: #FFFFFF;
  }

  .sc-dUrmIn.eFdPQd.enter-done > .sc-jSgvzq.sc-gKseQn.sc-jrAFXE.cJbOry.krDwpZ.dlWDxF > .sc-iBPTik.lmqrKP {
    color: #FFFFFF;
  }

  .sc-dUrmIn.eFdPQd.enter-done > .sc-jSgvzq.sc-gKseQn.sc-jrAFXE.cJbOry.krDwpZ.dlWDxF > .sc-fubCzh.giORqW > p.sc-gsTEea.dwXOcF {
    color: #000000;
  }

  //Menú lateral y botón Conect Wallet en responsive
  @media screen and (min-width: 968px) {
    .cYKLVU {
      border-right: none;
      width: 0;
    }
    .sc-dWddBi.cZZjAt > button.sc-hKgJUU.icXFyL {
      background: #FF0000 !important;
    }
  }
 

`

export default GlobalStyle
