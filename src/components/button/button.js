import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-top: 30px;
  text-align: center;

  button {
    background: radial-gradient(
      233.93% 3285.08% at 52.55% 50%,
      #0367a9 0%,
      #2af6ff 100%
    );
    box-shadow: 0px 0px 10px 4px #02e2e4, 0px 0px 15px #00ffff;
    border-radius: 20px;
    border: unset;
    padding: 16px 30px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
`;

export const StyledButton = ({ text }) => {
  return (
      <ButtonContainer>
        <button>{text}</button>
      </ButtonContainer>
  );
};
