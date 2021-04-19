import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { PartnersLsi } from "../../Lsi/lsi";

const Title = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.04em;
  color: #ffffff;
  text-align: center;
  margin: 0 0 80px 0;

  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 40px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;

  @media screen and ${device.tablet} {
    margin-bottom: 80px;
  }
  
   @media screen and ${device.mobileL} {
    margin-bottom: 20px;
  }

  a {
    margin: 0 40px 40px 0;

    &:last-child {
      margin: 0 0 40px 0;
    }

    @media screen and ${device.tablet} {
      margin: 0 25px 25px 0;

      &:last-child {
        margin: 0 0 25px 0;
      }
    }
    @media screen and ${device.mobileL} {
      margin: 0 10px 10px 0;

      &:last-child {
        margin: 0 0 10px 0;
      }
    }
  }
`;

const Img = styled.img`
  height: 60px;
  width: auto;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
  @media screen and ${device.tablet} {
    height: 30px;
  }
  @media screen and ${device.mobileL} {
    height: 19px;
  }
  @media screen and ${device.mobileS} {
    height: 15px;
  }
`;

export const Partners = ({ locale, partners }) => {
  return (
    <AppSizeLayout>
      <Title>{PartnersLsi[locale]}</Title>
      <Container>
        {partners.map((partner, index) => (
          <a key={index+partner.url} href={partner.url} target="_blank">
            <Img
              key={index + partner?.logo?.sourceUrl}
              src={partner?.logo?.sourceUrl}
            />
          </a>
        ))}
      </Container>
    </AppSizeLayout>
  );
};
