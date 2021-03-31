import {AppSizeLayout} from "../layouts/appSizeLayout";
import {TitleForComponent} from "../titleForComponent/title";
import {SwiperComponent} from "../swiper/swiper";
import {lessonsInVr} from "../../Lsi/lsi";

const {firstTitle, secondTitle} = lessonsInVr

export const VrLessonsSwiper = ({locale, content}) =>{
    return (
        <AppSizeLayout>
            <TitleForComponent>
                {firstTitle[locale]}
                <h1>VR</h1>
                {secondTitle[locale]}
            </TitleForComponent>
            <SwiperComponent content={content} />
        </AppSizeLayout>
    )
}