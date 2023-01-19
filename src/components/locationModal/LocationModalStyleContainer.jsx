import styled from "styled-components";

// export const Box = styled.div`
//   width: 488px;
//   height: 700px;
//   /* display: flex;
//   border-radius: 6px;
//   background-color: #997d7d;
//   margin-top: 20px;
//   flex-direction: column;
//   text-align: right; */
//   padding: 35px;

//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   top: 0;
//   /* width: 100%;
//   height: 100%; */
//   z-index: 1000;
//   backdrop-filter: blur(4px);
// `;
export const Box = styled.div`
  width: 488px;
  height: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  z-index: 1000;
  border-radius: 6px;
  box-shadow: 10px 10px 5px #aaaaaa;
`;
export const BoxButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 29px;
  justify-content: space-between;
`;
export const ButtonAccept = styled.button`
  width: 290px;
  height: 45px;
  margin-right: 15px;
  background-color: #be3737;
  &:hover {
    background-color: #cf4a4a;
  }
`;

export const ButtonCancel = styled.button`
  width: 290px;
  height: 45px;
  border: 1px solid #777676;

  &:hover {
    background-color: #e9e9e9;
  }
`;
