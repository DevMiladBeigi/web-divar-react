import styled from "styled-components";

export const Box = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  /* background-color: red; */
  /* position: absolute; */
  top: 80px;
  left: 200px;
  flex-direction: column;
  text-align: right;
  position: ${(props)=>props.showChatSupport ? 'fixed' : 'absolute' };
  /* z-index: 100; */
  z-index: ${(props)=>props.showChatSupport ? '1000000000' : '100' };
`;

