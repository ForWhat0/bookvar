import styled, { css, keyframes } from "styled-components";
import { StyledButton } from "../button/button";
import { useEffect, useState } from "react";
import { device } from "../deviceSizes/deviceSizes";
import { Device, SendText } from "../../Lsi/lsi";
import { ButtonHandler } from "../use-experience/button-handler";
import PostBody from "../post-body/post-body";
import { InputStyled } from "../input/input";
import { SendButton } from "../sendButton/sendButton";
import {
  addSpacesBetweenNumbers,
  sendGmail,
  separatePriceAndCurrency,
} from "../hooks/hooks";
import { useMutation } from "@apollo/client";
import { SendWordpress } from "../../mutations/send-wordpress";
import Link from "next/link";

const growAnimation = keyframes`
from {
transform: scale(1);
    opacity: 1;
}
to {
transform: scale(1.3);
    opacity: 0;
}
`;
const growAnimationHandler = (props) =>
  css`
    ${growAnimation} 0.5s ease-in-out;
  `;
const Global = styled.div`
  margin-top: 80px;

  @media screen and ${device.tablet} {
    margin-top: 20px;
  }
`;
const Container = styled.div`
  display: flex;

  @media screen and ${device.laptop} {
    flex-direction: column;
  }
`;
const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-right: 120px;

  @media screen and (max-width: 1200px) {
    width: 300px;
    margin-right: 80px;
  }

  @media screen and ${device.laptop} {
    margin-right: unset;
    width: 360px;
  }

  @media screen and ${device.tablet} {
    align-self: center;
  }
  @media screen and ${device.mobileL} {
    width: 100%;
  }
`;
const MainProductPhoto = styled.div`
  height: 373px;
  width: 100%;
  background: linear-gradient(251.35deg, #e8f2fd 0%, #c3cee9 100%);
  border-radius: 20px;

  div {
    background: url(${(props) => props.src}) center center no-repeat;
    background-size: 80%;
    height: 100%;
    width: 100%;
    animation: ${(props) => props.animation};
  }
`;
const RestProductPhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const RestProductPhoto = styled.div`
  margin-top: 20px;
  width: 165px;
  height: 163px;
  background: linear-gradient(251.35deg, #e8f2fd 0%, #c3cee9 100%);
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  div {
    background: url(${(props) => props.src}) center center no-repeat;
    background-size: 90%;
    height: 100%;
    width: 100%;
    animation: ${(props) => props.animation};

    @media screen and ${device.mobileL} {
      background-size: 80%;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 140px;
  }

  @media screen and ${device.laptop} {
    width: 165px;
  }

  @media screen and ${device.mobileL} {
    width: 48%;
    height: 128px;
  }
`;
const Content = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  text-align: left;

  @media screen and ${device.mobileL} {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Title = styled.h1`
  display: ${(props) => (props.display ? "block" : "none")};
  font-weight: bold;
  font-size: 54px;
  line-height: 66px;
  color: #ffffff;
  margin: 0;
  padding: 0;

  @media screen and ${device.laptop} {
    display: ${(props) => (props.display ? "none" : "block")};
    padding-bottom: 30px;
    text-align: center;
  }
  @media screen and ${device.tablet} {
    font-size: 32px;
  }
  @media screen and ${device.mobileL} {
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 20px;
  }
`;
const Exist = styled.span`
  margin-top: 40px;
`;
const Id = styled.span`
  margin-top: 20px;
`;
const CountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  @media screen and ${device.mobileL} {
    justify-content: space-between;
    margin-top: 20px;
  }
`;
const PriceContainer = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-wrap: wrap;
  margin-top: 60px;
  align-items: baseline;
  color: #ffffff;

  @media screen and ${device.mobileL} {
    display: ${(props) => (props.display ? "none" : "flex")};
    justify-content: center;
    margin-top: 40px;
  }
`;
const Discount = styled.span`
  letter-spacing: 0.04em;
  text-decoration-line: line-through;
  margin-right: 20px;

  @media screen and ${device.mobileL} {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Price = styled.span`
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.04em;

  @media screen and ${device.mobileL} {
    font-size: 20px;
    line-height: 24px;
  }
`;
const ButtonContainer = styled.div`
  width: 255px;
  margin-top: 60px;

  @media screen and ${device.tablet} {
    display: flex;
    align-self: center;
  }
  @media screen and ${device.mobileL} {
    width: 100%;
  }
`;
const Count = styled.div`
  margin-left: 20px;
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.04em;
    color: #ffffff;
  }

  div {
    border-radius: 5px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: #12162a;
    font-weight: bold;
    font-size: 40px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const ShowInfo = styled.div`
  opacity: ${(props) => (props.exist ? "1" : "0.3")};
  z-index: ${(props) => (props.exist ? "1" : "-1")};
`;

const TabsContainer = styled.div`
  display: flex;
  margin-top: 60px;
`;
const Specifications = styled.div`
  h1 {
    margin: 50px 0 0 0;
    color: #ffffff;
    font-size: 54px;
    @media screen and ${device.tablet} {
      font-size: 16px;
    }
  }
`;

const SpecificationsDetails = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: baseline;

  @media screen and ${device.mobileL} {
    align-items: flex-start;
  }

  h3 {
    margin: 0;
    color: #ffffff;
    font-size: 20px;
    margin-left: 20px;
    width: 50%;

    @media screen and ${device.tablet} {
      font-size: 14px;
      margin-left: 5px;
    }
  }
`;
const NameOfDetail = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-end;

  @media screen and ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }

  span {
    color: #8c92ac;
    font-size: 20px;
    margin-right: 5px;

    @media screen and ${device.tablet} {
      font-size: 14px;
      margin-right: 2px;
    }
  }
  div {
    height: 1px;
    border-bottom: 2px dotted gray;
  }
`;
const BuyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
  padding-bottom: 20px;

  @media screen and ${device.tablet} {
    flex-direction: column;
    border-bottom: unset;
  }

  h3 {
    display: none;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;

    @media screen and ${device.tablet} {
      display: block;
    }
  }
`;
const ProductIcon = styled.div`
  grid-area: picture;
  height: 154px;
  width: 165px;
  margin-left: unset;
  background: linear-gradient(251.35deg, #e8f2fd 0%, #c3cee9 100%);
  border-radius: 20px;

  @media screen and ${device.tablet} {
    width: 50%;
    margin-left: 25%;
    height: 292px;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    margin-left: 10%;
  }
  @media screen and ${device.mobileL} {
    width: 100%;
    margin-left: unset;
  }

  div {
    background: url(${(props) => props.src}) center center no-repeat;
    background-size: 90%;
    height: 100%;
    width: 100%;

    @media screen and ${device.tablet} {
      background-size: 80%;
    }
  }
`;
const ProductInfo = styled.div`
  margin-left: 30px;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 0.04em;

  @media screen and ${device.tablet} {
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: 30px;
    line-height: 37px;

    @media screen and ${device.tablet} {
      display: none;
    }
  }
  h2 {
    margin: 40px 0 8px 0;
    font-size: 25px;
    line-height: 30px;

    @media screen and ${device.tablet} {
      font-size: 20px;
      line-height: 24px;
    }
  }
  span {
    font-size: 20px;
    line-height: 24px;

    @media screen and ${device.tablet} {
      font-size: 18px;
    }
  }
`;
const Form = styled.div`
  margin: 80px 0 150px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1,
  span {
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin: 0;
  }

  @media screen and ${device.tablet} {
    margin: 40px 0 80px 0;

    h1 {
      font-size: 20px;
      line-height: 24px;
    }
    span {
      font-size: 16px;
      line-height: 17px;
    }
  }
  @media screen and ${device.mobileL} {
    span {
      font-size: 14px;
    }
  }
`;

const {
  availability,
  exist,
  notExist,
  vendor,
  amount,
  buy,
  descriptionLsi,
  specifications,
  quality,
  item,
  thanks,
  orderIsAccepted,
  linkToMain,
} = Device;

const { emptyFields, wrongEmail, wrongPhoneNumber } = SendText.Errors;
const { nameLsi, phoneNumberLsi, emailLsi, send, sent } = SendText.FieldsName;

export const Product = ({ locale, device }) => {
  const { databaseId, title, content, featuredImage, ProductField } = device;
  const {
    img1,
    img2,
    oldPrice,
    productExistence,
    productPrice,
    flexibleContent,
  } = ProductField;
  const [count, setCount] = useState(1);
  const { price, currency } = separatePriceAndCurrency(productPrice);
  const fixedPrice = addSpacesBetweenNumbers(price, count);
  const [mainPhoto, setMainPhoto] = useState(featuredImage?.node?.sourceUrl);
  const [leftPhoto, setLeftPhoto] = useState(img1?.sourceUrl);
  const [rightPhoto, setRightPhoto] = useState(img2?.sourceUrl);
  const [leftAnimation, setLeftAnimation] = useState(false);
  const [rightAnimation, setRightAnimation] = useState(false);
  const [description, setDescription] = useState(true);
  const [name, setName] = useState("");
  const [nameWarning, setNameWarning] = useState(null);
  const [email, setEmail] = useState("");
  const [emailWarning, setEmailWaring] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneWarning, setPhoneWarning] = useState(null);
  const [buyProduct, setBuyProduct] = useState(false);
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    setBuyProduct(false);
    setOrdered(false);
  }, []);

  const orderProduct = async () => {
    if (!name) {
      return setNameWarning(emptyFields[locale]);
    }
    if (!phone) {
      return setPhoneWarning(emptyFields[locale]);
    }
    if (!email) {
      return setEmailWaring(emptyFields[locale]);
    }
    if (
      phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    ) {
      if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/im)) {
        await sendWordpress();
        await sendGmail(sendContent);
      } else {
        setEmail("");
        return setEmailWaring(wrongEmail[locale]);
      }
    } else {
      setPhone("");
      return setPhoneWarning(wrongPhoneNumber[locale]);
    }
  };

  const clearAllFields = () => {
    setOrdered(true);
    setName("");
    setPhone("");
    setEmail("");
    setNameWarning("");
    setPhoneWarning("");
    setEmailWaring("");
  };

  const sendContent = `
        <h1>Замовлення</h1>
        <ul>
        <h2 style="{">Товар</h2>
        <li>ім'я товару: ${title};</li>
        <li>ціна за одиницю товару: ${productPrice};</li>
        <li>ціна замовлення: ${fixedPrice} ${currency};</li>
        <li>кількість замовленого товару: ${count};</li>
        <li>id товару: ${databaseId};</li>
        <br/>
        <img width="100%" height="auto" src=${
          featuredImage.node.sourceUrl
        } alt='Photo of product'/>
        <h2>Замовник</h2>
        <li>ім'я: ${name} ;</li>
         <li>телефон: ${phone} ;</li>
        <li>email: ${email} ;</li>
        <li>id замовлення: ${Math.random() + Math.random()}${Number(
    databaseId
  )}</li>
        <ul/>
        `;

  let [sendWordpress, { data, error, loading }] = useMutation(SendWordpress, {
    variables: {
      input: {
        commentOn: databaseId,
        content: sendContent,
        author: name,
        authorEmail: email,
      },
    },
    onCompleted: () => {
      if (!error) {
        clearAllFields();
      }
    },
    onError: (error) => {
      if (error) {
        clearAllFields();
      }
    },
  });

  const changePhoto = ({ left }) => {
    if (left) {
      setLeftAnimation(true);
    } else {
      setRightAnimation(true);
    }
  };

  const onAnimationEnd = ({ left, right }) => {
    setLeftAnimation(false);
    setRightAnimation(false);
    if (left) {
      setLeftPhoto(mainPhoto);
      setMainPhoto(leftPhoto);
    }
    if (right) {
      setRightPhoto(mainPhoto);
      setMainPhoto(rightPhoto);
    }
  };

  const showBuyProduct = () => {
    return (
      <BuyContainer>
        <ProductContainer>
          <h3>{title}</h3>
          <ProductIcon src={featuredImage?.node?.sourceUrl}>
            <div />
          </ProductIcon>
          <ProductInfo>
            <h1>{title}</h1>
            <h2>
              {fixedPrice}
              {currency}
            </h2>
            <span>
              {quality[locale]} {count}
              {item[locale]}
            </span>
          </ProductInfo>
        </ProductContainer>
        {ordered ? (
          <Form>
            <h1>{thanks[locale]}</h1>
            <span>{orderIsAccepted[locale]}</span>
            <ButtonContainer>
              <Link href="/">
                <StyledButton text={linkToMain[locale]} />
              </Link>
            </ButtonContainer>
          </Form>
        ) : (
          <Form>
            <InputStyled
              maxlength="20"
              warning={nameWarning}
              value={name}
              text={nameLsi[locale]}
              onChange={(e) => setName(e.target.value)}
              width="50%"
            />
            <InputStyled
              maxlength="20"
              warning={phoneWarning}
              value={phone}
              text={phoneNumberLsi[locale]}
              onChange={(e) => setPhone(e.target.value)}
              width="50%"
            />
            <InputStyled
              warning={emailWarning}
              value={email}
              maxlength="40"
              text={emailLsi[locale]}
              onChange={(e) => setEmail(e.target.value)}
              width="50%"
            />
            <ButtonContainer>
              <SendButton
                sentText={sent[locale]}
                sendText={send[locale]}
                errorText={sent[locale]}
                error={error}
                done={data}
                loading={loading}
                click={orderProduct}
              />
            </ButtonContainer>
          </Form>
        )}
      </BuyContainer>
    );
  };

  const showProduct = () => {
    return (
      <>
        <Container>
          <Title display={false}>{title}</Title>
          <Gallery>
            <MainProductPhoto
              src={mainPhoto}
              animation={
                leftAnimation || rightAnimation
                  ? growAnimationHandler()
                  : "unset"
              }
            >
              <div onAnimationEnd={() => onAnimationEnd} />
            </MainProductPhoto>
            <RestProductPhotoContainer>
              {leftPhoto && (
                <RestProductPhoto
                  onClick={() => changePhoto({ left: true })}
                  animation={leftAnimation ? growAnimationHandler : "unset"}
                  src={leftPhoto}
                >
                  <div onAnimationEnd={() => onAnimationEnd({ left: true })} />
                </RestProductPhoto>
              )}
              {rightPhoto && (
                <RestProductPhoto
                  onClick={() => changePhoto({ left: false })}
                  animation={rightAnimation ? growAnimationHandler : "unset"}
                  src={rightPhoto}
                >
                  <div onAnimationEnd={() => onAnimationEnd({ right: true })} />
                </RestProductPhoto>
              )}
            </RestProductPhotoContainer>
          </Gallery>
          <ShowInfo exist={productExistence}>
            <PriceContainer display={false}>
              {oldPrice && <Discount>{oldPrice}</Discount>}
              <Price>{productPrice}</Price>
            </PriceContainer>
            <Content>
              <Title display={true}>OCULUS QUEST</Title>
              <Exist>
                {availability[locale]}{" "}
                {productExistence ? exist[locale] : notExist[locale]}
              </Exist>
              <Id>
                {vendor[locale]} {databaseId}
              </Id>
              <CountContainer>
                {amount[locale]}
                <Count>
                  <div onClick={() => count !== 1 && setCount(count - 1)}>
                    -
                  </div>
                  <span>{count}</span>
                  <div onClick={() => setCount(count + 1)}>+</div>
                </Count>
              </CountContainer>
              <PriceContainer display={true}>
                {oldPrice && <Discount>{oldPrice}</Discount>}
                <Price>{productPrice}</Price>
              </PriceContainer>
              <ButtonContainer>
                <StyledButton
                  onclick={() => setBuyProduct(true)}
                  text={buy[locale]}
                />
              </ButtonContainer>
            </Content>
          </ShowInfo>
        </Container>
        <TabsContainer>
          <ButtonHandler
            opacity={description}
            onClick={() => setDescription(true)}
            type={descriptionLsi[locale]}
          />
          <ButtonHandler
            opacity={!description}
            onClick={() => setDescription(false)}
            type={specifications[locale]}
          />
        </TabsContainer>
        {description ? (
          <PostBody content={content} />
        ) : (
          <Specifications>
            {flexibleContent.map((item, index) => (
              <div key={index + item.title}>
                <h1>{item.title}</h1>
                {item.listOption.map((option, index) => (
                  <SpecificationsDetails key={index + option.itemOption1}>
                    <NameOfDetail>
                      <span>{option.itemOption1}</span>
                      <div />
                    </NameOfDetail>
                    <h3>{option.itemOption2}</h3>
                  </SpecificationsDetails>
                ))}
              </div>
            ))}
          </Specifications>
        )}
      </>
    );
  };

  return <Global>{buyProduct ? showBuyProduct() : showProduct()}</Global>;
};
