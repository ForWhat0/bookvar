import { TitleForComponent } from "../titleForComponent/title";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { SingleAdvantage } from "./single-advantage";
import styled from "styled-components";
import {device} from "../deviceSizes/deviceSizes";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10%;
  justify-content: center;
  align-items: baseline;

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and ${device.tablet} {
    grid-template-columns: 1fr;
    grid-gap: 60px;
  }
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
            key={index + item.titleItem}
            icon={item.imgItem.sourceUrl}
            title={item.titleItem}
            text={item.textItem}
          />
        ))}
      </Container>
    </AppSizeLayout>
  );
};
