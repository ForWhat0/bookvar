import styled from "styled-components";
import { TitleForComponent } from "../titleForComponent/title";
import {StyledButton} from "../button/button";
import {ButtonContainer} from "../main-approach/mainApproach";

const ContainerProduct = styled.div`
  display: flex;
  width: 80%;
  margin-left: 10%;
  justify-content: space-between;
  padding-top: 150px;
  position: relative;
  color: white;
`;
const Product = styled.div`
  width: 42%;
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
`;
const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 40%;
`;
const ProductImg = styled.div`
  width: 100%;
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

  h1 {
    position: absolute;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    font-size: 54px;
    line-height: 66px;
    margin: 0;
  }
`;
const PriceContainer = styled.div`
  padding: 45px 0 25px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  justify-content: center;
`;
const Discount = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-decoration-line: line-through;
  margin-right: 20px;
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.04em;
`;

export const Products = ({ products }) => {
  return (
    <>
      <TitleForComponent>
        <h1>VR</h1>
       Гарнитура
      </TitleForComponent>
      <ContainerProduct>
        {products.map((item, index) => (
          <Product
            position={(index + 1) % 2 === 0 ? "absolute" : "unset"}
            right={(index + 1) % 2 === 0 ? "0" : "unset"}
            bottom={(index + 1) % 2 === 0 ? "100px" : "unset"}
          >
            <ImgBlock>
              <ProductImg src={item.img} />
            </ImgBlock>
            <TitleBlock
              right={(index + 1) % 2 === 0 ? "-5%" : "unset"}
              left={(index + 1) % 2 !== 0 ? "-5%" : "unset"}
            >
              <h1>{item.title}</h1>
            </TitleBlock>
            <PriceContainer>
              {item.discount && <Discount>{item.discount}</Discount>}
              <Price>{item.price}</Price>
            </PriceContainer>
              <ButtonContainer>
                  <StyledButton text='Узнать подробнее'/>
              </ButtonContainer>
          </Product>
        ))}
      </ContainerProduct>
    </>
  );
};
