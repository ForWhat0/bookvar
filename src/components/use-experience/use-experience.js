import styled from "styled-components";
import { TitleForComponent } from "../titleForComponent/title";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { ButtonHandler } from "./button-handler";
import { HandlerlideTo, slideTo, SwiperComponent } from "../swiper/swiper";
import { device } from "../deviceSizes/deviceSizes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlideToHandler } from "../../redux/actions/actions";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_VR_CLASS } from "../../queries/get-vr-class";
import StyledLoader from "../loader/loader";
import { GET_AR_CLASS } from "../../queries/get-ar-class";
import { useExperience } from "../../Lsi/lsi";

export const Content = styled.div``;
export const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;

  @media screen and ${device.laptop} {
    flex-direction: column;
  }

  @media screen and ${device.tablet} {
    align-items: center;
    padding-bottom: 20px;
  }
`;
export const ArVrContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and ${device.laptop} {
    margin-bottom: 20px;
  }
`;
export const KlassContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SecondBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 80px;

  @media screen and ${device.tablet} {
    justify-content: center;
    padding-bottom: 30px;
  }
`;
const ThreeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and ${device.laptop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ThemeContainer = styled.div`
  background: rgba(42, 204, 255, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0 30px;
  height: min-content;
  width: 30%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 400px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: radial-gradient(
        96% 96% at 70.4% 31.2%,
        #0089e3 0%,
        rgba(0, 2, 16, 0) 100%
      ),
      #0069ae;
    box-shadow: 0px 4px 80px #0089e3,
      inset 0px 2px 10px rgba(255, 255, 255, 0.58),
      inset 10px 16px 20px rgba(42, 246, 255, 0.95);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
  }

  @media screen and ${device.laptop} {
    width: 100%;
    margin-bottom: 40px;
  }

  @media screen and ${device.laptop} {
    padding: 20px 0 0 0;
  }
`;
const ThemeWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 30px;

  @media screen and ${device.laptop} {
    padding-bottom: unset;
    padding: 0 20px 20px 20px;
    width: 90%;
  }
`;
const Theme = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${(props) => props.color};
  width: 100%;
  cursor: pointer;
  transition: color 0.3s linear;

  &:hover {
    color: #2accff;
  }

  @media screen and ${device.mobileL} {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }
`;
export const Icon = styled.div`
  display: ${(props) => props.display};
  width: 40px;
  height: 40px;
  background: url(${(props) => props.src}) center center no-repeat;
  background-size: contain;
  position: absolute;
  right: -25px;
  top: -8px;

  @media screen and ${device.tablet} {
    right: 0;
    top: 0;
    width: 35px;
    height: 25px;
  }
`;
export const Video = styled.div`
  width: 60%;

  @media screen and ${device.laptop} {
    width: 100%;
  }
`;
export const LoaderContainer = styled.div`
display:flex;
justify-content:center;
align-items;center;
padding:50px 0;
`;

const { first, second } = useExperience;

export const UseExperience = ({ video, classes, vr, locale }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(
    video.VideoField.flexibleContent[0].listVideoLesson
  );
  const [currentLesson, setCurrentLesson] = useState(
    video.VideoField.flexibleContent[0].nameLesson
  );
  const [currentClass, setCurrentClass] = useState(video?.databaseId);
  let [getClass, { data, loading }] = useLazyQuery(
    vr ? GET_VR_CLASS : GET_AR_CLASS,
    {
      variables: { classId: currentClass },
    }
  );

  useEffect(() => {
    if (data) {
      if (vr) {
        setState(data.videoVR.VideoField.flexibleContent[0].listVideoLesson);
        setCurrentLesson(data.videoVR.VideoField.flexibleContent[0].nameLesson);
        setCurrentClass(data.videoVR.databaseId);
      } else {
        setState(data.videoAR.VideoField.flexibleContent[0].listVideoLesson);
        setCurrentLesson(data.videoAR.VideoField.flexibleContent[0].nameLesson);
        setCurrentClass(data.videoAR.databaseId);
      }
    }
  }, [data]);

  const HandleChangeLesson = (str, arr) => {
    dispatch(SlideToHandler("null"));
    setState(arr);
    setCurrentLesson(str);
  };
  const { swiperSlideTo } = useSelector((state) => state.app);
  const handleGetClass = async (id) => {
    await setCurrentClass(id);
    getClass();
  };
  const showLessonHandler = (firstArr, mooreArr) => {
    if (mooreArr) {
      if (vr) {
        return mooreArr.videoVR.VideoField.flexibleContent.map((item) => (
          <ButtonHandler
            opacity={item.nameLesson === currentLesson}
            key={item.nameLesson}
            icon={item?.iconLesson?.sourceUrl}
            less={item.nameLesson}
            onClick={() =>
              HandleChangeLesson(item.nameLesson, item.listVideoLesson)
            }
          />
        ));
      } else {
        return mooreArr.videoAR.VideoField.flexibleContent.map((item) => (
          <ButtonHandler
            opacity={item.nameLesson === currentLesson}
            key={item.nameLesson}
            icon={item?.iconLesson?.sourceUrl}
            less={item.nameLesson}
            onClick={() =>
              HandleChangeLesson(item.nameLesson, item.listVideoLesson)
            }
          />
        ));
      }
    }

    return firstArr.map((item) => (
      <ButtonHandler
        opacity={item.nameLesson === currentLesson}
        key={item.nameLesson}
        icon={item?.iconLesson?.sourceUrl}
        less={item.nameLesson}
        onClick={() =>
          HandleChangeLesson(item.nameLesson, item.listVideoLesson)
        }
      />
    ));
  };
  return (
    <AppSizeLayout>
      <TitleForComponent>
        {first[locale]}
        <h1>{vr ? "VR" : "AR"}</h1>
        {second[locale]}
      </TitleForComponent>
      <Content>
        <FirstBlock>
          <ArVrContainer>
            <ButtonHandler opacity={!vr} type="AR" />
            <ButtonHandler opacity={vr} type="VR" />
          </ArVrContainer>
          <KlassContainer>
            {classes.map((item) => (
              <ButtonHandler
                key={item.title}
                opacity={item.databaseId === currentClass}
                classNum={item.title}
                onClick={() => handleGetClass(item.databaseId)}
              />
            ))}
          </KlassContainer>
        </FirstBlock>
        {loading ? (
          <LoaderContainer>
            <StyledLoader />
          </LoaderContainer>
        ) : (
          <>
            <SecondBlock>
              {showLessonHandler(video.VideoField.flexibleContent, data)}
            </SecondBlock>
            <ThreeBlock>
              <ThemeContainer>
                {state.map((item, index) => (
                  <ThemeWrapper>
                    <Theme
                      color={
                        swiperSlideTo === "null" && index === 0
                          ? "#2accff"
                          : swiperSlideTo === index
                          ? "#2accff"
                          : "#ffffff"
                      }
                      onClick={() => dispatch(SlideToHandler(index))}
                    >
                      {item.name}
                    </Theme>
                    <Icon
                      display={
                        swiperSlideTo === "null" && index === 0
                          ? "block"
                          : swiperSlideTo === index
                          ? "block"
                          : "none"
                      }
                      src="selected-theme-icon.svg"
                    />
                  </ThemeWrapper>
                ))}
              </ThemeContainer>
              <Video>
                <SwiperComponent classOn={true} cube={true} content={state} />
              </Video>
            </ThreeBlock>
          </>
        )}
      </Content>
    </AppSizeLayout>
  );
};
