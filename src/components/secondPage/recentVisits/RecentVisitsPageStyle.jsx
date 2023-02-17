import styled from "styled-components";

export const Box = styled.div`
  width: 65%;
  height: auto;
  /* background-color: red; */
  display: flex;
  position: absolute;
  top: 100px;
  left: 125px;
  flex-wrap:wrap;
  justify-content: flex-end;
`;

export const BoxMark = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  /* background-color: #008000; */
  justify-content: flex-end;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin: 5px;
`;

export const BoxImage = styled.div`
  width: 80px;
  height: 80px;
  padding: 15px;
  /* background-color: red; */
  img {
    width: 80px;
    height: 80px;
    border-radius: 6px;
  }
`;

export const BoxDescriptions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: red; */
  /* justify-content: flex-end; */
  flex-direction: column;
  text-align: right;
`;

export const BoxDescriptionsTitle = styled.div`
 
font-size: 15px;
margin-top: 15px;

`;

export const BoxDescriptionsTime = styled.div`
 
font-size: 12px;
color: #a3a3a3;
margin-top: 5px;


`;


export const BoxIcon=styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-top: 25px;

img{
    width: 18px;
    height: 18px;
    margin-bottom: 10px;
    margin-left: 20px;
}

`
