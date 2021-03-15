import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 255, 255, 0.5);
  border-radius: 20px;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-right:5px;
  cursor:pointer;
`;
const ContentWrapper = styled.div`
display:flex;
align-items: center;
padding:${props=>props.padding};
transition: transform 0.1s linear;
  
  &:hover {
  transform:scale(0.9);
  }
`;
const First = styled.div`
  background: ${(props) => props.background};
  background-size: contain;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display:flex;
`;
const Second = styled.div`
padding-left:10px;
`;

export const ButtonHandler = ({ type, classNum, icon, less }) => {
  return (
    <Container>
      <ContentWrapper padding={icon ? '8px 10px' : '12px 30px'}>
        <First
          background={icon ? `url(${icon}) center center no-repeat` : "unset"}
          width={icon ? "40px" : "auto"}
          height={icon ? "40px" : "auto"}
        >
          {type ? type : classNum && classNum}
        </First>
          {
              classNum ?  <Second>класс</Second> : less && <Second>{less}</Second>
          }
      </ContentWrapper>
    </Container>
  );
};
