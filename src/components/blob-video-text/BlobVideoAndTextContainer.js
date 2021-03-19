import styled from "styled-components";
import { actionClickVideoModal } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { device } from "../deviceSizes/deviceSizes";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 700px;
  flex-direction: ${(props) => props.rowAlign};
  padding: 180px 0 80px 0;

  @media screen and (max-width: 950px) {
    height: 400px;
  }

  @media screen and ${device.tablet} {
    padding: 60px 0 90px 0;
    flex-direction: column-reverse;
    width: 93.6%;
    margin-left: 3.2%;
    height: auto;
  }
`;
const Text = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.mR};

  @media screen and ${device.tablet} {
    width: 100%;
  }

  span {
    font-weight: bold;
    font-size: 54px;
    line-height: 66px;
    text-align: ${(props) => props.textAlign};
    color: #ffffff;

    @media screen and (max-width: 950px) {
      font-size: 40px;
      line-height: 50px;
    }
    @media screen and ${device.tablet} {
      margin-left: unset;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      padding-bottom: 40px;
    }
    @media screen and ${device.mobileL} {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
const BlobContainer = styled.div`
  width: 50%;
  position: relative;

  @media screen and ${device.tablet} {
    width: 100%;
    height: 300px;
  }
  @media screen and ${device.mobileL} {
    height: 220px;
  }
`;
const Blob = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 100%;
  cursor: pointer;
  border-radius: ${(props) => props.borderRadius};
  height: 100%;
  overflow: hidden;
  box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%) border-box;
  border: 4px solid transparent;

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @media screen and ${device.tablet} {
    position: initial;
  }
`;

const Background = styled.div`
  background: url(${(props) => props.background});
    center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PLayIcon = styled.div`
  width: 25%;
  height: 25%;
  background-image: url("/play-icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 950px) {
    width: 50%;
    height: 50%;
  }
`;

export const BlobVideoAndTextContainer = ({
  text,
  video,
  background,
  right,
}) => {
  const dispatch = useDispatch();
  const leftAlign = right ? "unset" : "-5%";
  const rightAlign = right ? "-5%" : "unset";
  const textAlign = right ? "left" : "right";
  const marginRight = right ? "10%" : "unset";
  const rowAlign = right ? "row-reverse" : "row";
  const borderRadius = right
    ? "32% 68% 64% 36% / 30% 42% 58% 70%"
    : "73% 27% 34% 66% / 26% 21% 79% 74%";
  return (
    <Container rowAlign={rowAlign}>
      <BlobContainer onClick={() => dispatch(actionClickVideoModal(video))}>
        <Blob left={leftAlign} right={rightAlign} borderRadius={borderRadius}>
          <Background background={background}>
            <PLayIcon />
          </Background>
        </Blob>
      </BlobContainer>
      <Text mR={marginRight} textAlign={textAlign}>
        <span>{text}</span>
      </Text>
    </Container>
  );
};
