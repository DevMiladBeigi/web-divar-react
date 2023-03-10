import styled from "styled-components";

export const Box = styled.div`
  width: 37%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  position: absolute;
  top: 120px;
  left: 400px;
  text-align: right;
  div {
    color: #6b6b6b;
  }
`;
export const BoxIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  /* background-color: red; */
  border-radius: 50%;
  justify-content: center;
  align-self: center;
  text-align: center;
  margin-left: 15px;

  img {
    width: 15px;
    height: 15px;
    align-self: center;
    margin-right: 5px;
  }
`;

export const BoxItem = styled.a`
  padding: 15px;
  width: 100%;
  height: auto;
  display: flex;
  border: solid 1px #d8d8d8;
  border-radius: 6px;
  margin-top: 15px;
  justify-content: space-between;
  text-decoration: none;

  img {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    margin-left: 25px;
  }

  &:hover > ${BoxIcon} {
    background-color: #e2e2e2;
    transition: 800ms;
  }
`;
export const BoxTitle = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-right: -140px;
  /* background-color: red; */
  align-items: flex-end;
  div {
    display: flex;
    color: #363636;
    padding: 5px;
  }
`;

// export const Box = styled.div`
//   width: 37%;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   /* background-color: red; */
//   position: absolute;
//   top: 120px;
//   left: 400px;
//   text-align: right;
//   div {
//     color: #6b6b6b;
//   }

// `;

// export const BoxItem = styled.a`
//   width: 100%;
//   height: 110px;
//   display: flex;
//   /* background-color: red; */
//   justify-content: flex-end;
//   margin-top: 20px;
//   cursor: pointer;
//   text-decoration: none;
//   border: solid 1px #d3d3d3;
//   border-radius: 6px;
//   img {
//     width: 80px;
//     height: 80px;
//     margin-top: 10px;
//     margin-right: 10px;
//   }

//   /* background-color: ${(props) => (props.show ? "#dfdfdf" : null)}; */
// `;

// export const BoxTitle = styled.div`
//   width: auto;

//   height: auto;
//   display: flex;
//   /* background-color: red; */
//   flex-direction: column;
//   margin-right: 15px;
//   margin-top: 20px;
//   div {
//     margin-top: 8px;
//     color: #555555;
//   }
// `;

// export const BoxIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-top: 35px;
//   box-sizing: border-box;
//   display: flex;

//   img {
//     width: 12px;
//     height: 12px;
//     margin-top: 13px;
//     margin-left: 12px;
//   }
//   /* background-color: ${(props) => (props.show ? "#dfdfdf" : null)}; */

// `;

// export const BoxChange = styled.div`
//   width: 80%;
//   height: auto;
//   display: flex;
//   justify-content: space-between;
//   margin-right: 10px;

// `;
