import { createGlobalStyle } from "styled-components";

import Vazir from '../../../../assets/fonts/Vazir.ttf'


export const LocationGlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Vazir';
    src: url(${Vazir});
  }
 
    div{
        font-size: 30px;
        color: #000000DE;
        font-family: Vazir;

    }
`


