import styled from "styled-components";



const Box=styled.div`
    width:270px;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #6f6cf0;
    position: fixed;
    margin-top: 66px;
    align-items: flex-end;
    @media (max-width: 1024px) {
        width: 176px;
        height: auto;

      }
`

export default Box