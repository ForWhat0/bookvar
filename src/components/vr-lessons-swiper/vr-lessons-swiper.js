import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { TitleForComponent } from "../titleForComponent/title";
import { SwiperComponent } from "../swiper/swiper";
import { lessonsInVr } from "../../Lsi/lsi";
import { StyledButton } from "../button/button";
import { ButtonContainer } from "../main-approach/mainApproach";
import { ScrollToElement } from "../../redux/actions/actions";

const { firstTitle, secondTitle, buttonText } = lessonsInVr;

export const VrLessonsSwiper = ({ locale, content }) => {
  const dispatch = useDispatch();

  return (
    <AppSizeLayout>
      <TitleForComponent>
        {firstTitle[locale]}
        <h1>VR</h1>
        {secondTitle[locale]}
      </TitleForComponent>
      <SwiperComponent content={content} />
      <ButtonContainer>
        <Link scroll={false} href="/Vr">
          <a>
            <StyledButton
              onclick={() => dispatch(ScrollToElement("#VrLessons"))}
              text={buttonText[locale]}
            />
          </a>
        </Link>
      </ButtonContainer>
    </AppSizeLayout>
  );
};
