import Link from "next/link";
import styled from "styled-components";
import { TitleForComponent } from "../titleForComponent/title";
import { StyledButton } from "../button/button";
import { ButtonContainer } from "../main-approach/mainApproach";
import { DevicesText } from "../../Lsi/lsi";
import { device } from "../deviceSizes/deviceSizes";

const ContainerProduct = styled.div`
  display: flex;
  width: 80%;
  margin-left: 10%;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  color: white;

  @media screen and ${device.laptopL} {
    width: 95%;
    margin-left: 2.5%;
  }

  @media screen and ${device.laptop} {
    margin-left: unset;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const Product = styled.div`
  width: 42%;
  cursor:pointer;
  margin-top: 150px;
  min-width: 488px;
  height: 544px;
  background: linear-gradient(
    180deg,
    #081843 0%,
    rgba(42, 246, 255, 0.19) 100%
  );
  border-radius: 40px;
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  @media screen and (max-width: 2000px) {
    min-width: unset;
    max-width: 488px;
    width: 49%;
  }

  @media screen and ${device.laptop} {
    max-width: unset;
    margin-top: 80px;
    width: 80%;
  }

  @media screen and ${device.tablet} {
    height: 328px;
  }

  @media screen and ${device.mobileL} {
    width: 100%;
  }
`;
const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 40%;
`;
const ProductImg = styled.div`
  width: 270px;
  height: 100%;
  background: url(${(props) => props.src}) no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  top: -50%;
`;
const TitleBlock = styled.div`
  position: relative;
  width: 100%;
  min-height: 65px;

  @media screen and ${device.tablet} {
    text-align: center;
    min-height: unset;
  }

  h1 {
    position: absolute;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    font-size: 54px;
    line-height: 66px;
    margin: 0;

    @media screen and ${device.tablet} {
      position: initial;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
const PriceContainer = styled.div`
  padding: 45px 0 25px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  justify-content: center;

  @media screen and ${device.tablet} {
    padding: 35px 0 25px 0;
  }
`;
const Discount = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-decoration-line: line-through;
  margin-right: 20px;

  @media screen and ${device.tablet} {
    font-size: 14px;
    line-height: 17px;
  }
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.04em;

  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 20px;
  }
`;
const { title, details } = DevicesText;

export const Products = ({ products, locale, bottom }) => {
  return (
    <>
      <TitleForComponent>
        <h1>VR</h1>
        {title[locale]}
      </TitleForComponent>
      <ContainerProduct>
        {products.map((item, index) => (
          <Link href="/Devices/[id]/" as={`/Devices/${item.databaseId}/`}>
              <Product
                position={
                  (index + 1) % 2 === 0 && bottom ? "absolute" : "initial"
                }
                right={(index + 1) % 2 === 0 && bottom ? "0" : "unset"}
                bottom={(index + 1) % 2 === 0 && bottom ? "100px" : "unset"}
              >
                <ImgBlock>
                  <ProductImg src={item.featuredImage?.node?.sourceUrl} />
                </ImgBlock>
                <TitleBlock
                  right={(index + 1) % 2 === 0 ? "-5%" : "unset"}
                  left={(index + 1) % 2 !== 0 ? "-5%" : "unset"}
                >
                  <h1>{item.title}</h1>
                </TitleBlock>
                <PriceContainer>
                  {item.ProductField?.oldPrice && (
                    <Discount>{item.ProductField.oldPrice}</Discount>
                  )}
                  <Price>{item.ProductField?.productPrice}</Price>
                </PriceContainer>
                <ButtonContainer>
                  <StyledButton text={details[locale]} />
                </ButtonContainer>
              </Product>
          </Link>
        ))}
      </ContainerProduct>
    </>
  );
};
