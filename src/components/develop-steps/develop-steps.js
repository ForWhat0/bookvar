import {SwiperSteps} from "../swiper/swiper-steps";
import {AppSizeLayout} from "../layouts/appSizeLayout";

export const DevelopSteps = ({steps}) => {
    return (
        <AppSizeLayout>
            <SwiperSteps content={steps} />
        </AppSizeLayout>
    )
}