import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";
import { buttonText } from "../../Lsi/lsi";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { actionClickModal } from "../../redux/actions/actions";

const Content = styled.div`

  display: grid;
  grid-template-areas:
    "title picture"
    "text picture";
  grid-template-columns 0.5fr 0.5fr;
  text-align:${(props) => props.textAlign};
     margin-top: ${(props) => (props.main ? "400px" : "40px")};
 
 @media screen and (max-width: 2320px) {
         margin-top: ${(props) => (props.main ? "300px" : "40px")};
    }
    
    @media screen and ${device.laptopL} {
         margin-top: ${(props) => (props.main ? "100px" : "40px")};
  }
 
 @media screen and ${device.laptop} {
       grid-template-columns 1fr 0.5fr;
       margin-top:40px;
  }
  @media screen and ${device.tablet} {
     grid-template-columns 1fr;
     grid-template-areas:
    "title"
    "picture"
    "text";
  }
 
  div {
   grid-area: title;
       align-items: flex-end;
   @media screen and ${device.tablet} {
     text-align:center;
      align-items: unset;
  }
  }
  
  h2,h1 {
  align-self: flex-end;
  }
  
   h2 {
  padding: 0;
    margin: 0;   
    font-weight: bold;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    display: inline;
    @media screen and ${device.laptop} {
     font-size: 32px;
     line-height:44px;
  }
  @media screen and ${device.tablet} {
     font-size: 20px;
line-height: 24px;
  }
  }

   h1 {
    display: inline;
    margin: 0;
    padding: 0 20px;
    font-weight: bold;
    font-size: 65px;
    line-height: 79px;
    letter-spacing: 0.04em;
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and ${device.laptop} {
     font-size: 36px;
     line-height:44px;
     padding: 0 10px;
  }
  @media screen and ${device.tablet} {
     font-size: 24px;
       line-height: 24px;
        padding: 0 5px;
  }
  }
  
   p {
  grid-area: text;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  padding-top: 50px;
    margin: 0;
    @media screen and ${device.tablet} {
     font-size: 20px;
      padding-top: 40px;
  line-height: 24px;
  text-align:center;
  }
  }
  
   figure {
   position:relative;
      padding: 0;
    margin: 0;
   grid-area: picture;
   width:100%;
   
    @media screen and ${device.tablet} {
     padding-top:20px;
     width:50%;
     margin-left:25%;
  }

  }
  figure img {
  
       position: absolute;
    max-width: unset!important;
    width: ${(props) =>
      props.main ? "140%" : props.all ? "55%" : "100%"}!important;
     top: ${(props) => (props.main ? "-340%" : props.vrar ? "-100%" : "unset")};
    left:0;
    
    @media screen and (max-width: 2320px) {
        width: ${(props) =>
          props.main ? "140%" : props.vrar ? "80%" : "100%"}!important;
     top: ${(props) =>
       props.main ? "-200%" : props.vrar ? "-100%" : "unset"};
  
    }
    
    @media screen and (max-width: 1900px) {
width: ${(props) => (props.main ? "140%" : "100%")}!important;
     top: ${(props) => (props.main ? "-180%" : props.vrar ? "-80%" : "unset")};
  
    }
    
    
     @media screen and (max-width: 1700px) {
            width: ${(props) => (props.main ? "140%" : "110%")}!important;
     top: ${(props) => (props.main ? "-120%" : props.vrar ? "-60%" : "unset")};
    }
    @media screen and ${device.laptopL} {
     width: ${(props) => (props.main ? "140%" : "120%")}!important;
     top: ${(props) => (props.main ? "-50%" : props.vrar ? "-40%" : "unset")};
  }
     @media screen and (max-width: 1200px) {
           width: 130%!important;
            top: 0;

    }
      @media screen and ${device.laptop} {
   width: 150%!important;
  }
  @media screen and ${device.tablet} {
   width: 100%!important;
   position:initial;
  }
   }
`;

const ButtonContainer = styled.div`
 display: grid;
  margin-top:80px;
  grid-template-columns 0.5fr 0.5fr;
      margin-bottom: ${(props) => (props.main ? "400px" : "unset")};
  
  
   @media screen and (max-width: 2320px) {
         margin-bottom: ${(props) => (props.main ? "200px" : "40px")};
    }
  
   @media screen and (max-width:1800px) {
      margin-bottom: ${(props) => (props.main ? "120px" : "40px")};
  }
 
 @media screen and ${device.laptop} {
       grid-template-columns 1fr 0.5fr;
       margin-bottom: 40px;
  }
  @media screen and ${device.tablet} {
     grid-template-columns 1fr;
      margin-top:30px;
  }
  
  button {
  cursor:pointer;
  padding:16px 30px;
  border:none;
 font-weight: 500;
font-size: 20px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: radial-gradient(233.93% 3285.08% at 52.55% 50%, #0367A9 0%, #2AF6FF 100%);
box-shadow: 0px 0px 10px 4px #02E2E4, 0px 0px 15px #00FFFF;
border-radius: 20px;
width: fit-content;
justify-self: ${(props) => props.textAlign};
transition:all 0.1s ease-in-out;

@media screen and ${device.tablet} {
   justify-self: center;
   font-size: 16px;
line-height: 20px;
  padding:15px 20px;
  }
  
  @media screen and ${device.tablet} {
    font-size: 14px;
line-height: 17px;
  }

&:hover {
transform:scale(1.1)
}

}
  
`;

const { learnMore, getLessons, order } = buttonText;

export const MainText = ({ main, vrar, text, textCenter, locale }) => {
  const dispatch = useDispatch();
  const textAlign = textCenter ? "center" : "left";
  const position = textCenter ? "absolute" : "initial";
  const width = textCenter ? "500px" : "100%";
  return (
    <>
      <Content
        main={main}
        vrar={vrar}
        textAlign={textAlign}
        position={position}
        width={width}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <ButtonContainer main={main} textAlign={textAlign}>
        {main ? (
          <Link href="/AllLessons">
            <button>
              <span>{learnMore[locale]}</span>
            </button>
          </Link>
        ) : (
          <button
            onClick={() =>
              vrar
                ? dispatch(actionClickModal(true))
                : dispatch(actionClickModal("get"))
            }
          >
            <span>{vrar ? order[locale] : getLessons[locale]}</span>
          </button>
        )}
      </ButtonContainer>
    </>
  );
};
