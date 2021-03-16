import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-areas:
    "title picture"
    "text picture";
  grid-template-columns 1fr 0.3fr;
`;

const Title = styled.div`
  grid-area: title;

  div {
    font-weight: bold;
    font-size: 54px;
    line-height: 66px;
    color: #ffffff;
    display: inline-block;
  }

  div h1 {
    display: inline-block;
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
`;
const Text = styled.p`
  grid-area: text;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  padding-bottom: 40px;
`;
const Picture = styled.div`
  grid-area: picture;
  background: url(/light_bulb_with_brain.svg) center center no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
`;

export const MainText = () => {
  return (
    <Content>
      <Title>
        <div>
          МЫ СОЗДАЕМ ЭФФЕКТИВНЫЕ ОБУЧАЮЩИЕ УРОКИ В<h1>VR</h1>
          ДЛЯ ШКОЛ УКРАИНЫ
        </div>
      </Title>
      <Text>
        Технологии виртуальной реальности дают практически безграничные
        возможности по созданию обучающих курсов разного уровня сложности,
        тестирования и мониторинга процесса обучения. Для создания обучающего
        курса подходят большинство моделей недорогих очков виртуальной
        реальности, поэтому самой затратной частью курса становится его
        создание.
      </Text>
      <Picture />
    </Content>
  );
};
