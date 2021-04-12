import styled from "styled-components";
import { Element } from "react-scroll";
import { TitleForComponent } from "../titleForComponent/title";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { device } from "../deviceSizes/deviceSizes";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_VR_CLASS } from "../../queries/get-vr-class";
import StyledLoader from "../loader/loader";
import { GET_AR_CLASS } from "../../queries/get-ar-class";
import { useExperience } from "../../Lsi/lsi";
import { ButtonHandler } from "../use-experience/button-handler";
import { GET_VR_TYPE_CLASS } from "../../queries/get-Vr-type-class.";
import { GET_AR_TYPE_CLASS } from "../../queries/get-ar-type-class";
import {
  ArVrContainer,
  Content,
  LoaderContainer,
  FirstBlock,
  KlassContainer,
  SecondBlock,
} from "../use-experience/use-experience";
import { Text } from "../swiper/swiperStyled";
import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";
import { IconBackground } from "../icon/icon";
import { getYoutubeThumbnail } from "../hooks/hooks";
import { useDispatch } from "react-redux";
import { actionClickVideoModal } from "../../redux/actions/actions";
import { LocalPagination } from "../pagination/local-pagination";

const Video = styled.div`
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  height: 100%;
  box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%) border-box;
  color: #313149;
  border: 4px solid transparent;
  border-radius: 33px;
  width: calc(100% - 8px) !important;
`;
const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.background}) center center no-repeat;
  background-size: cover;

  @media screen and ${device.laptopL} {
    background-size: auto;
  }

  @media screen and (max-width: 900px) {
    background-size: cover;
  }

  @media screen and ${device.mobileL} {
    background-size: auto;
  }
`;
const ThreeBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const Conteiner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const VideoContainerWrapper = styled.div`
  height: 360px;
  position: relative;
  @media screen and ${device.laptopL} {
    height: 264px;
  }
  @media screen and ${device.mobileL} {
    height: 211px;
  }
`;
const { first, second } = useExperience;

export const AllLessonsVideos = ({ video, classes, locale }) => {
  const dispatch = useDispatch();

  const [pageOfItems, setPageOfItems] = useState([]);
  const [state, setState] = useState(
    video.VideoField.flexibleContent[0].listVideoLesson
  );
  const [classState, setClassState] = useState(classes);
  const [isVrClasses, setIsVrClasses] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(
    video.VideoField.flexibleContent[0].nameLesson
  );
  const [currentClass, setCurrentClass] = useState(video?.databaseId);

  let [getType, { data: dataType, loading: loadingType }] = useLazyQuery(
    isVrClasses ? GET_VR_TYPE_CLASS : GET_AR_TYPE_CLASS,
    {
      variables: { language: locale },
      onCompleted: () => {
        setState(
          isVrClasses
            ? dataType?.videosVR?.nodes[0]?.VideoField?.flexibleContent[0]
                ?.listVideoLesson
            : dataType?.videosAR?.nodes[0]?.VideoField?.flexibleContent[0]
                ?.listVideoLesson
        );
        setClassState(dataType?.classes.nodes);
        setCurrentClass(
          isVrClasses
            ? dataType?.videosVR?.nodes[0].databaseId
            : dataType?.videosAR?.nodes[0].databaseId
        );
      },
    }
  );

  let [getClass, { data, loading }] = useLazyQuery(
    isVrClasses ? GET_VR_CLASS : GET_AR_CLASS,
    {
      variables: { classId: currentClass },
      onCompleted: () => {
        if (data && !loading && !loadingType) {
          if (isVrClasses) {
            setState(
              data.videoVR.VideoField.flexibleContent[0].listVideoLesson
            );
            setCurrentLesson(
              data.videoVR.VideoField.flexibleContent[0].nameLesson
            );
            setCurrentClass(data.videoVR.databaseId);
          } else {
            setState(
              data.videoAR.VideoField.flexibleContent[0].listVideoLesson
            );
            setCurrentLesson(
              data.videoAR.VideoField.flexibleContent[0].nameLesson
            );
            setCurrentClass(data.videoAR.databaseId);
          }
        }
      },
    }
  );

  const HandleChangeLesson = (str, arr) => {
    setState(arr);
    setCurrentLesson(str);
  };
  const HandleOnChangePage = (pageOfItems) => {
    setPageOfItems(pageOfItems);
  };
  const handleGetClass = async (id) => {
    await setCurrentClass(id);
    getClass();
  };
  const handleGetType = async () => {
    await setIsVrClasses(!isVrClasses);
    getType();
  };
  const showLessonHandler = () => {
    if (!loading && !loadingType && data) {
      if (isVrClasses) {
        return data.videoVR?.VideoField.flexibleContent.map((item) => (
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
        return data.videoAR?.VideoField.flexibleContent.map((item) => (
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

    return video.VideoField.flexibleContent.map((item) => (
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
    <Element name="AllLessons" className="element">
      >
      <AppSizeLayout>
        <TitleForComponent>
          {first[locale]}
          <h1>{isVrClasses ? "VR" : "AR"}</h1>
          {second[locale]}
        </TitleForComponent>
        <Content>
          <FirstBlock>
            <ArVrContainer>
              <ButtonHandler
                opacity={!isVrClasses}
                onClick={() => handleGetType()}
                type="AR"
              />
              <ButtonHandler
                opacity={isVrClasses}
                onClick={() => handleGetType()}
                type="VR"
              />
            </ArVrContainer>
            <KlassContainer>
              {classState.map((item) => (
                <ButtonHandler
                  locale={locale}
                  key={item.title}
                  opacity={item.databaseId === currentClass}
                  classNum={item.title}
                  onClick={() => handleGetClass(item.databaseId)}
                />
              ))}
            </KlassContainer>
          </FirstBlock>
          {loading || loadingType ? (
            <LoaderContainer>
              <StyledLoader />
            </LoaderContainer>
          ) : (
            <>
              <SecondBlock>{showLessonHandler()}</SecondBlock>
              <ThreeBlock>
                {pageOfItems.map((item, index) => (
                  <Conteiner key={index + item.name}>
                    <VideoContainerWrapper
                      onClick={() => dispatch(actionClickVideoModal(item.url))}
                    >
                      <Video backgorund={getYoutubeThumbnail(item.url)}>
                        <IconBackground background="play-icon.svg" />
                        <Thumbnail background={getYoutubeThumbnail(item.url)} />
                      </Video>
                    </VideoContainerWrapper>
                    <Text display="flex">
                      <LinearGradientText text={item.name} size="45px" />
                      <p>{item.text}</p>
                    </Text>
                  </Conteiner>
                ))}
              </ThreeBlock>
            </>
          )}
        </Content>
        <LocalPagination
          element="AllLessons"
          items={state}
          onChangePage={HandleOnChangePage}
        />
      </AppSizeLayout>
    </Element>
  );
};
