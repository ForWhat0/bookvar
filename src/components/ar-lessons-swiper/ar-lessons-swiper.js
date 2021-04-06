import { AppSizeLayout } from "../layouts/appSizeLayout";
import { TitleForComponent } from "../titleForComponent/title";
import { SwiperComponent } from "../swiper/swiper";
import { lessonsInAr } from "../../Lsi/lsi";
import Link from "next/link";
import { StyledButton } from "../button/button";
import { ScrollToElement } from "../../redux/actions/actions";
import { ButtonContainer } from "../main-approach/mainApproach";
import { useDispatch } from "react-redux";

const { firstTitle, secondTitle, buttonText } = lessonsInAr;

export const ArLessonsSwiper = ({ locale, content }) => {
  const dispatch = useDispatch();

  return (
    <AppSizeLayout>
      <TitleForComponent>
        {firstTitle[locale]}
        <h1>AR</h1>
        {secondTitle[locale]}
      </TitleForComponent>
      <SwiperComponent content={content} />
      <ButtonContainer>
        <Link scroll={false} href="/Ar">
          <a>
            <StyledButton
              onclick={() => dispatch(ScrollToElement("#ArLessons"))}
              text={buttonText[locale]}
            />
          </a>
        </Link>
      </ButtonContainer>
    </AppSizeLayout>
  );
};
