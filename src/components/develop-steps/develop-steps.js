import styled from "styled-components";
import { SwiperSteps } from "../swiper/swiper-steps";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { TitleForComponent } from "../titleForComponent/title";
import { DevelopStepsLsi } from "../../Lsi/lsi";
import { device } from "../deviceSizes/deviceSizes";
const { firstTitle, secondTitle } = DevelopStepsLsi;

const Space = styled.div`
  margin-bottom: 150px;

  @media screen and ${device.tablet} {
    margin-bottom: 40px;
  }
`;

export const DevelopSteps = ({ steps, locale, vr }) => {
  return (
    <Space>
      <AppSizeLayout>
        <TitleForComponent>
          {firstTitle[locale]}
          <h1>{vr ? "VR" : "AR"}</h1>
          {secondTitle[locale]}
        </TitleForComponent>
        <SwiperSteps content={steps} />
      </AppSizeLayout>
    </Space>
  );
};
