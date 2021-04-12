import { TitleForComponent } from "../titleForComponent/title";
import { SingleAdvantage } from "./single-advantage";
import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";
import { VrText } from "../../Lsi/lsi";

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

const Space = styled.div`
  margin-top: 150px;

  @media screen and ${device.tablet} {
    margin-top: 40px;
  }
`;

const { first, second } = VrText.benefitsTitle;

export const AdvantageOfVr = ({ advantage, locale }) => {
  return (
    <Space>
      <TitleForComponent>
        {first[locale]}
        <h1>VR</h1>
        {second[locale]}
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
    </Space>
  );
};
