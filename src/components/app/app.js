import styled from "styled-components";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { device } from "../deviceSizes/deviceSizes";
import { TitleForComponent } from "../titleForComponent/title";
import { BookVarApp } from "../../Lsi/lsi";

const SpaceBetween = styled.div`
  padding-top: 150px;
  @media screen and ${device.tablet} {
    padding-top: 70px;
  }
`;

const Container = styled.div`

display:grid;
height:600px;
display: grid;
  grid-template-areas:
    "title picture"
    "text picture";
  grid-template-columns 1fr 0.7fr;
  
  @media screen and ${device.tablet} {
       grid-template-areas:
    "title"
    "picture"
    "text";
  grid-template-columns 1fr;
      grid-template-rows: 0.3fr 1fr 1fr;
    grid-gap: 45px;
    }
`;

const Title = styled.div`
  grid-area: title;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;

  div {
    background: url(${(props) => props.src}) no-repeat left center;
    background-size: contain;
    width: 100%;
    height: 50%;

    @media screen and ${device.laptop} {
      height: 70%;
    }

    @media screen and ${device.tablet} {
      background-position: center center;
    }
  }
`;
const Text = styled.div`
  padding-top: 40px;
  grid-area: text;
  width: 98%;

  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.04em;
    color: #ffffff;

    @media screen and ${device.tablet} {
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.04em;
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and ${device.tablet} {
    padding-top: unset;
    width: 100%;
  }
`;

const Picture = styled.div`
  grid-area: picture;
  height: 100%;
  background: url(${(props) => props.src}) no-repeat right center;
  background-size: contain;

  @media screen and ${device.tablet} {
    background-position: center center;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  padding-top: 80px;

  @media screen and ${device.tablet} {
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
  }
`;
const Link = styled.div`
  width: 200px;
  height: 60px;
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: contain;
  margin: ${(props) => props.margin};

  @media screen and ${device.tablet} {
    margin: ${(props) => (props.margin ? "0 0 20px 0" : "unset")};
    width: 173px;
    height: 53px;
  }
`;
const { firstTitle, secondTitle } = BookVarApp;
export const App = ({ locale, appLink, playLink, picture, title, text }) => {
  return (
    <AppSizeLayout>
      <SpaceBetween>
        <TitleForComponent>
          {firstTitle[locale]}
          <h1>AR</h1>
          {secondTitle[locale]}
        </TitleForComponent>
        <Container>
          <Title src={title}>
            <div />
          </Title>
          <Text>
            <p>{text}</p>
            <LinkContainer>
              <a target="_blank" href={playLink}>
                <Link src="/googlePlayIcon.svg" margin="0 30px 20px 0" />
              </a>
              <a target="_blank" href={appLink}>
                <Link src="/appStore.svg" />
              </a>
            </LinkContainer>
          </Text>
          <Picture src={picture} />
        </Container>
      </SpaceBetween>
    </AppSizeLayout>
  );
};
