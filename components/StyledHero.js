import styled from "styled-components";
import ministerialmain from "../assets/images/ministerial/ministerial-main.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => `${props.img}main`}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
