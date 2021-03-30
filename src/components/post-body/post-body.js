import styled from "styled-components";
import { useSelector } from "react-redux";
import { device } from "../deviceSizes/deviceSizes";

const StyledBlock = styled.div`
  display: flow-root;
  position: relative;

  h2,
  h1 {
    margin: 50px 0 0 0;
    font-size: 54px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 66px;
    color: #ffffff;

    @media screen and (max-width: 1300px) {
      font-size: 32px;
      line-height: 34px;
    }

    @media screen and ${device.tablet} {
      margin: 10px 0 0 0;
    }

    @media screen and ${device.tablet} {
      font-size: 20px;
      line-height: 24px;
    }
  }

  && p,
  div,
  li {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.8);

    @media screen and ${device.tablet} {
      font-size: 14px;
      line-height: 17px;
    }
  }
  && a {
    display: block;
    color: white;
    border-bottom: 1px solid;
  }
  && p {
    margin-bottom: 40px;
  }
  && div ul li {
    list-style-type: none;
  }

  figure {
    margin: 50px 50px 0 0;
    justify-content: center;
    @media screen and ${device.laptop} {
      margin: 10px 0 0 0;
    }
  }
`;

export default function PostBody({ content }) {
  return <StyledBlock dangerouslySetInnerHTML={{ __html: content }} />;
}

const StyledBlockZNO = styled.div`
  display: flow-root;
  margin-bottom: ${(props) => props.margin};
  border-bottom: 1px solid ${(props) => props.color};
  position: relative;
  line-height: 27px;
  && h2,
  h1 {
    font-size: 24px !important;
    font-weight: 500 !important;
    margin-bottom: 20px !important;
    @media screen and ${device.tablet} {
      font-size: 16px !important;
    }
  }
  && p,
  div,
  li {
    @media screen and ${device.tablet} {
      font-size: 12px !important;
    }
  }
  && ul {
    margin: 0 0 40px 0;
    padding: 0;
  }
  && ol {
    margin: 0 0 40px 0;
    padding-left: 20px;
  }
  && ul li {
    margin-bottom: 20px;
    list-style-type: none;
    padding-left: 20px;
  }
  && div ul li {
    border-left: 5px solid #0072bc;
  }
  && div div ul li {
    border-left: 5px solid #ffde00;
  }
`;

export const PostBodyZNO = ({ content }) => {
  const { visuallyImpairedModeWhiteTheme } = useSelector((state) => state.app);
  return (
    <StyledBlockZNO
      margin={!visuallyImpairedModeWhiteTheme ? "unset" : "50px"}
      color={!visuallyImpairedModeWhiteTheme ? "white" : "black"}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </StyledBlockZNO>
  );
};
