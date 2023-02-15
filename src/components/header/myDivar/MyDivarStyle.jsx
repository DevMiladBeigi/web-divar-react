import styled from "styled-components";
const Button = styled.button`
  margin: 5px 270px 0 0;

  background-color: ${(props) => props.isopenModal && "#f3f3f3"};
`;

export default Button;
