import {AppSizeLayout} from "../layouts/appSizeLayout";
import {TitleForComponent} from "../titleForComponent/title";
import {SwiperComponent} from "../swiper/swiper";
import {lessonsInAr} from "../../Lsi/lsi";

const {firstTitle, secondTitle} = lessonsInAr

export const ArLessonsSwiper = ({locale, content}) =>{
    return (
        <AppSizeLayout>
            <TitleForComponent>
                {firstTitle[locale]}
                <h1>AR</h1>
                {secondTitle[locale]}
            </TitleForComponent>
            <SwiperComponent content={content} />
        </AppSizeLayout>
    )
}