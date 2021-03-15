import { TitleForComponent } from "../titleForComponent/title";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { SingleAdvantage } from "./single-advantage";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10%;
  justify-content: center;
  align-items: center;
`;

export const AdvantageOfVr = ({ advantage }) => {
  return (
    <AppSizeLayout>
      <TitleForComponent>
        Преимущество
        <h1>VR</h1>
        обучение
      </TitleForComponent>
      <Container>
        {advantage.map((item, index) => (
          <SingleAdvantage
            key={index+item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Container>
    </AppSizeLayout>
  );
};
