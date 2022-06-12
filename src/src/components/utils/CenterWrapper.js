import styled from "styled-components";

const CenterWrapper = styled.div`  
  width : 80%;
  justify-content :center;
  align-items : center;
  text-align : center;
  background : transparent;
  margin : 0 auto;
  span {
    display : block;
    color : white;
    width : 100%;
    font-size: 330%;
  }
  input {
    font-size: 330%;
    width : 80%;
    background : transparent;
    border : none;
    border-bottom : solid aquamarine;
    text-align : center;
    outline: none;
    color : white;
  }
`;


export default CenterWrapper;