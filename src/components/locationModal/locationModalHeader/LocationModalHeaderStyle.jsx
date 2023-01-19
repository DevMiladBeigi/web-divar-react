import styled from "styled-components";

 export const Box=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
    border-radius: 6px;
`
export const Button=styled.button`
    width: 70px;
    height: 25px;
    margin-right: 290px;
    margin-top: 10px;
    font-size: 12px;
    color: #be3737;
    border-radius: 20px;
    &:hover{
        background-color: #ecb5b5;

    }

`

export const HeaderTitle=styled.div`
    font-size: 19px;
    color: #292727;
    margin-bottom: 20px;
    margin-right: 8px;
  

`

export const HeaderDes=styled.div`
    font-size: 16px;
    color: #b4b4b4;
    font-weight: 500;
    /* display: none; */

`

export const BoxCity=styled.div`
    padding: 2px 8px;
    margin-right: 8px;
    margin-top: 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 30px;
    text-align: center;
    width: auto;
    height: auto;
    background-color:#dbc0c08e;
    border: 1px solid rgba(166,38,38,.56) ;
    div{
        font-size: 16px;
        color: #b41010c5;
    }
`
export const ButtonCity=styled.button`
text-align: center;
width: 20Px;
height: 20px;
margin: 3px 10px 0 0;
background-color:#ebdddd8e;
border-radius: 20px;
&:hover{
    background-color: rgba(166,38,38,.56);

}
img{
    width: 15px;
    height: 15px;
    margin-right: 10px;
}
    
`