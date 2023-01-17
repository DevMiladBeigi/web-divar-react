import { createGlobalStyle } from "styled-components";
import Vazir from "../../assets/fonts/Vazir.ttf";

const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'Vazir';
    src: url(${Vazir});
  }
Button{
    font-family: "Vazir";
    cursor: pointer;
    border: none;
    background-color: white;
    border-radius: 6px;
    align-items: center;
    
    display: flex;
    justify-content: center;
  img{
    width: 20px;
    height: 20px;
    padding-left: 10px;
  }
  &:hover{
    background-color:#f3f3f3;
    
    div{
      font-weight:900;
    }
  }
  transition: color .36s ease,
  background-color .36s ease,
  box-shadow .36s ease,
  border-color .36s ease,
  transform .36s ease,
  -webkit-transform .36s ease;
  div{
    font-size: 14px;
    color:#6d6969;
    margin-left: 5px;
  }

}
input{
  font-family: "Vazir";
  font-size: 1rem;
    font-weight: 400;
    color:#6d6969;
    background-color: #f5f4f4;
    border: none;
    ::placeholder{
      color: #b8b8b8;
      font-size: 14px;
    }
   
  
}
`;

export default GlobalStyles;
