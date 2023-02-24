import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* background-color: #d19393; */
  justify-content: space-between;
  margin-top: 120px;
  flex-wrap: wrap;
`;

export const BoxItem = styled.div`
  width: auto;
  height: auto;
  /* background-color: #e7e7e7; */
  display: flex;
  flex-direction: column;
  img {
    width: 80px;
    height: 80px;
  }
  margin-left: 3px;
  margin-top: 30px;
`;



export const LinkMoreTag = styled(Link)`
  color: #A62626;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 5px;
`;






















// export const BoxItem = styled.div`
//   width: auto;
//   height: auto;
//   /* background-color: #e7e7e7; */
//   display: flex;
//   flex-direction: column;
//   img {
//     width: 80px;
//     height: 80px;
//   }
//   margin-left: 3px;
//   margin-top: 30px;
// `;

// export const LinkTitle = styled(Link)`
//   color: #292929;
//   font-size: 15px;
//   text-decoration: none;
//   margin-bottom: 12px;
// `;

// export const LinkTag = styled(Link)`
//   color: #7a7a7a;
//   font-size: 14px;
//   text-decoration: none;
//   margin-bottom: 5px;
// `;
// export const LinkMoreTag = styled(Link)`
//   color: #A62626;
//   font-size: 14px;
//   text-decoration: none;
//   margin-bottom: 5px;
// `;
