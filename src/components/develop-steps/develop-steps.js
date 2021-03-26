import {SwiperSteps} from "../swiper/swiper-steps";
import {AppSizeLayout} from "../layouts/appSizeLayout";
import {TitleForComponent} from "../titleForComponent/title";
import {DevelopStepsLsi} from "../../Lsi/lsi";
const { firstTitle, secondTitle } = DevelopStepsLsi;
export const DevelopSteps = ({steps, locale}) => {
    return (
        <AppSizeLayout>
            <TitleForComponent>
                {firstTitle[locale]}
                <h1>AR</h1>
                {secondTitle[locale]}
            </TitleForComponent>
            <SwiperSteps content={steps} />
        </AppSizeLayout>
    )
}