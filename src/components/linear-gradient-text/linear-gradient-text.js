import styled from "styled-components";

const Text = styled.span`
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: ${(props) => props.size};
  padding-top:10px;
`;

export const LinearGradientText = ({ text, size }) => {
  return <Text size={size}>{text}</Text>
};
