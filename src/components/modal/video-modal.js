import { PlanetMoveBorder } from "../planet/planet-move-on-border";
import ReactPlayer from "react-player/lazy";
import { useDispatch, useSelector } from "react-redux";
import { actionClickVideoModal } from "../../redux/actions/actions";
import StyledLoader from "../loader/loader";
import { useState } from "react";
import {Close, VideoContainer, VideoWrapper , Error, Video} from "./modalStyled";

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
        <Close onClick={() => close()}/>
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
