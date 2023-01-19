import styled from "styled-components";

 export const Box=styled.div`

    width: 488px;
    height: 600px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: auto;
    text-align: right;
    ::-webkit-scrollbar{
        width: 6px;
       
    }
    ::-webkit-scrollbar-thumb{
        background-color: #dfdcdc;
        border-radius: 50px;
    }
  
    ::-webkit-scrollbar-thumb:hover{
        background-color: #afaaaa;
        
    }
    ::-webkit-scrollbar-track{
        background-color: white;
        margin-block: 5px;
    }
`


export const BoxCity=styled.div`
margin-top: 10px;
margin-left: -8px;
width: 488px;
height: 40px;
display: flex;
justify-content: right;
/* background-color: red; */
span{
    font-size: 18px;
    margin-bottom: 10px;
    width: inherit;
    color:  #4b4b4b;
    &:hover{
        font-weight: 500;
    }
    text-align: right;
}
img{
    width: 15px;
    height: 15px;
    
    margin-bottom: 10px;  
}
border-bottom:2px solid #cccbcb;
button{
    width: 470px;
    height: 32px;
    background-color: white;
    &:hover{
        background-color: white;
    }
    
    justify-content: right;
}
`


export const BoxButton=styled.div`
width: 488px;
height: auto;
display: flex;
margin-top: 29px;
justify-content: right;
&:hover{
    background-color: white;
}
div{
    font-weight: 500;
}

`
export const ButtonAccept=styled.button`
width: 290px;
height: 45px;
margin-right: 15px;
background-color: #be3737;
&:hover{
    background-color: #cf4a4a;
    div{
        font-weight:500;
    }
  
}
div{
    color: white;
    font-size: 18px;

}
    
`
export const ButtonCancel=styled.button`
width: 290px;
height: 45px;

border: 1px solid  #777676;

&:hover{
    background-color: #e9e9e9;
    div{
        font-weight:500;
    }
}
div{
    font-size: 18px;
    &:hover{
        background-color: #e9e9e9;
    }
}
    
`


export const HorizontalLine=styled.div`
    border-top: 2px solid  #b8b5b5;
    width: 558px;
    margin-left: -35px;
`