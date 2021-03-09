import styled from "styled-components";
import { actionClickVideoModal } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 700px;
  flex-direction: ${(props) => props.rowAlign};
  padding: 180px 0 80px 0;
`;
const Text = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.mR};

  span {
    font-weight: bold;
    font-size: 54px;
    line-height: 66px;
    text-align: ${(props) => props.textAlign};
    color: #ffffff;
  }
`;
const BlobContainer = styled.div`
  width: 50%;
  position: relative;
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
`;

const Background = styled.div`
  background: url(https://images.indianexpress.com/2020/06/astronuat-space-pixabay-1200.jpg)
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
`;

export const BlobVideoAndTextContainer = ({ text, right }) => {
  const dispatch = useDispatch();
  const leftAlign = right ? "unset" : "-5%";
  const rightAlign = right ? "-5%" : "unset";
  const textAlign = right ? "left" : "right";
  const marginRight = right ? "10%" : "unset";
  const rowAlign = right ? "row-reverse" : "row";
  const borderRadius = right
    ? "6% 94% 14% 86% / 73% 54% 46% 27% "
    : "40% 60% 70% 30% / 40% 50% 60% 50%";
  return (
    <Container
      onClick={() =>
        dispatch(
          actionClickVideoModal(
            "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6"
          )
        )
      }
      rowAlign={rowAlign}
    >
      <BlobContainer>
        <Blob left={leftAlign} right={rightAlign} borderRadius={borderRadius}>
          <Background>
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
