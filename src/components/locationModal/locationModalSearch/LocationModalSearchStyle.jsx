import styled from "styled-components";

export const Search=styled.input`
width:450px;
height: auto;
border-radius: 4px;
display: flex;
text-align: right;
outline: none;
justify-content: center;
@media (max-width: 1024px) {
    width:350px;

      }
`

export const FormSearch=styled.form`
outline: 1px solid #b1aeae;
width: 470px;
height: 20px;
display: flex;    
justify-content: center;
text-align: center;
padding: 10px;
background-color: #f5f4f4;
border-radius: 6px;
margin-top: 20px;
&:hover{
    outline: 2px solid #706e6e;
}




`
export const ImageIcon=styled.img`
    width: 20px;
    height: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 2px;
    padding-left: 10px;

`

export const HorizontalLine=styled.div`
    border-top: 2px solid  #b8b5b5;
    margin-top: 20px;
    width: 558px;
    margin-left: -35px;
`

