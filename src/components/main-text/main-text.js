import styled from "styled-components";

const Content = styled.div`
 div {
  display: grid;
  grid-template-areas:
    "title picture"
    "text picture";
  grid-template-columns 1fr 0.3fr;
 }
  
  div h2 {
  padding: 0;
    margin: 0;
    grid-area: title;
    font-weight: bold;
    font-size: 54px;
    line-height: 66px;
    color: #ffffff;
    display: inline;
  }

  div h1 {
    grid-area: title;
    display: inline;
    margin: 0;
    padding: 0 20px;
    font-weight: bold;
    font-size: 65px;
    line-height: 79px;
    letter-spacing: 0.04em;
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  div p {
  grid-area: text;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  padding: 50px 0 0 0;
    margin: 0;
  }
  
  div figure {
      padding: 0;
    margin: 0;
   grid-area: picture;
   width:100%;
   height:100%;
  }
`;

export const MainText = ({ text }) => {
  return (
    <Content>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Content>
  );
};
