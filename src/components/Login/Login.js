import styled from "styled-components";

const Logins = styled.div`  
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

export default function Login() {
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const { href } = window.location;
      window.location.href = `${href}/main`
      console.log(e.target.value);
    }
  }

  return (
    <Logins>
      <span>
        Hello, Whats your name?
      </span>
      <input
        maxLength="15"
        onKeyDown={onKeyDown}
        required
      />
    </Logins>
  );
}