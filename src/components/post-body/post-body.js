import styled from "styled-components";
import { useSelector } from "react-redux";
import { device } from "../deviceSizes/deviceSizes";

const StyledBlock = styled.div`
  display: flow-root;
  position: relative;

  h2,
  h1 {
    margin: 70px 0 20px 0;
    font-size: 32px;
    font-weight: bold;
    line-height: 45px;
    color: #ffffff;

    @media screen and ${device.tablet} {
      margin: 30px 0 0 0;
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
    margin: 20px 0 40px 0;
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




