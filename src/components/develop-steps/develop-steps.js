import {SwiperSteps} from "../swiper/swiper-steps";
import {AppSizeLayout} from "../layouts/appSizeLayout";

const arrswper = [
    {
        text:
            "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
        url:
            "https://www.youtube.com/watch?v=H0IKOM5973E&list=RDx1zWCizNoRo&index=20",
        name: "Відео 1",
    },
    {
        text:
            "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
        url:
            "https://www.youtube.com/watch?v=3rkJ3L5Ce80&list=RDx1zWCizNoRo&index=27",
        name: "Відео 2",
    },
    {
        text:
            "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
        url:
            "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
        name: "Відео 3",
    },
    {
        text:
            "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
        url:
            "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
        name: "Відео 4",
    },
    {
        text:
            "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
        url:
            "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
        name: "Відео 5",
    },
    {
        text:
            "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
        url:
            "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
        name: "Відео 6",
    },
    {
        text:
            "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
        url:
            "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
        name: "Відео 7",
    }
];

export const DevelopSteps = ({steps}) => {
    return (
        <AppSizeLayout>
            <SwiperSteps content={arrswper} />
        </AppSizeLayout>
    )
}