import styled from "styled-components";

const Text = styled.div`
  display: inline-block;
  flex: wrap;
  align-items: center;
  font-weight: 500;
  font-size: 30px;
  line-height: 60px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-left:10%;
  width:80%;
  text-align:center;
  padding:0 0 80px 0;
  
  h1 {
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 64px;
  padding:10px;
  margin: 0;
  display: inline-block;
  }
`;

export const TitleForComponent = ({children}) => {
  return (
      <Text>
        {children}
      </Text>
  );
};
