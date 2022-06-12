import CenterWrapper from "../utils/CenterWrapper";

function moveSites(target) {
  const { href } = window.location;
  window.location.href = `${href}${target}`
}

export default function Login(props) {

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      moveSites("main");
    }
  }
  return (
    <CenterWrapper>
      <span>
        Hello, Whats your name?
      </span>
      <input
        maxLength="15"
        onKeyDown={onKeyDown}
        required
      />
    </CenterWrapper>
  );
}