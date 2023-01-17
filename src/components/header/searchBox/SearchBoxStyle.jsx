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
width: 450px;
height: 20px;
display: flex;    
justify-content: center;
text-align: center;
padding: 10px;
background-color: #f5f4f4;
border-radius: 6px;
margin-top: 4px;
margin-right: 1px;
@media (max-width: 1024px) {
    width:350px;
    margin-right: 10px;

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
export const Button=styled.button`
    width: 20px;
    height: 20px;
    background-color: #f5f4f4;
    border-radius: 50%;
   
    img{
        width: 15px;
        height: 15px;
        padding:0 0 2px 0;
        
    }
    &:hover{
        background-color: #d1cece;
    }
    text-align: center;
    justify-content: center;
`