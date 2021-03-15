import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";
import { PlanetMoveBorder } from "../planet/planet-move-on-border";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionClickVideoModal } from "../../redux/actions/actions";
import StyledLoader from "../loader/loader";
import { useState } from "react";

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(29, 29, 27, 0.2);
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;

  span {
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    position: absolute;
    top: 1%;
    right: 3%;
    font-size: 40px;
    cursor: pointer;
  }
`;

const VideoWrapper = styled.div`
  width: 90%;
  height: 80%;
  position: relative;
  background: #12162b;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
`;
const Video = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => props.display};
`;
const Error = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.04em;
  color: #ffffff;
`;
export const VideoModal = () => {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const { VideoModalIsOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const close = () => {
    dispatch(actionClickVideoModal(false));
    setError(false);
    setDone(false);
  };
  return (
    VideoModalIsOpen && (
      <VideoContainer onClick={() => close()}>
        <span onClick={() => close()}>X</span>
        <VideoWrapper onClick={(e) => e.preventDefault()}>
          <PlanetMoveBorder topPosition={true} size={40} />
          <PlanetMoveBorder size={80} />
          <Video display={!done || error ? "none" : "flex"}>
            <ReactPlayer
              controls={true}
              playing={true}
              width="100%"
              height="100%"
              wrapper={Video}
              url={VideoModalIsOpen}
              onBufferEnd={() => setDone(true)}
              onError={() => setError(true)}
            />
          </Video>
          {error ? <Error>Ошибка</Error> : !done && <StyledLoader />}
        </VideoWrapper>
      </VideoContainer>
    )
  );
};
