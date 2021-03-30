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

const Content = styled.div``;
const FirstBlock = styled.div`
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
const ArVrContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and ${device.laptop} {
    margin-bottom: 20px;
  }
`;
const KlassContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SecondBlock = styled.div`
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
const Icon = styled.div`
  display: ${(props) => props.display};
  width: 40px;
  height: 40px;
  background: url(${(props) => props.src}) center center no-repeat;
  background-size: contain;
  position: absolute;
  right: -50px;
  top: -8px;

  @media screen and ${device.laptop} {
    right: -25px;
  }
  @media screen and ${device.tablet} {
    right: 0;
    top: 0;
    width: 35px;
    height: 25px;
  }
`;
const Video = styled.div`
  width: 60%;

  @media screen and ${device.laptop} {
    width: 100%;
  }
`;
const LoaderContainer = styled.div`
display:flex;
justify-content:center;
align-items;center;
padding:50px 0;
`;

export const UseExperience = ({ video, classes }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(
    video.VideoField.flexibleContent[0].listVideoLesson
  );
  const [currentLesson, setCurrentLesson] = useState(
    video.VideoField.flexibleContent[0].nameLesson
  );
  const [currentClass, setCurrentClass] = useState(video?.databaseId);
  let [getClass, { data, loading }] = useLazyQuery(GET_VR_CLASS, {
    variables: { classId: currentClass },
  });

  useEffect(() => {
    if (data) {
      setState(data.videoVR.VideoField.flexibleContent[0].listVideoLesson);
      setCurrentLesson(data.videoVR.VideoField.flexibleContent[0].nameLesson);
      setCurrentClass(data.videoVR.databaseId);
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
        Наш опыт применения
        <h1>VR</h1>
        для обучения на уроках
      </TitleForComponent>
      <Content>
        <FirstBlock>
          <ArVrContainer>
            <ButtonHandler type="AR" />
            <ButtonHandler opacity={true} type="VR" />
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
