import styled from "styled-components";
import { Products } from "./products";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_DEVICES } from "../../queries/get-devices";
import StyledLoader from "../loader/loader";
import { Icon } from "../pagination/paginationStyled";
import { device } from "../deviceSizes/deviceSizes";

const Space = styled.div`
  margin-top: 20px;

  @media screen and ${device.tablet} {
    margin-top: 60px;
  }
`;

const Container = styled.div`
  margin: 40px 0 40px 0;
  position: relative;
  width: 100%;
  display: ${(props) => (props.display ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and ${device.tablet} {
    display: ${(props) => (props.display ? "flex" : "none")};
  }
`;

export const MoreProducts = ({ locale, devices }) => {
  const [offsetState, setOffsetState] = useState(2);
  let [getData, { data, loading, error }] = useLazyQuery(GET_DEVICES);

  const getDataHandler = async (str) => {
    const exist = await checkDataExistHandler(str);
    if (exist === "0.5") {
      return null;
    }

    const newOffset = str === "prev" ? offsetState - 2 : offsetState + 2;

    getData({ variables: { size: 2, offset: newOffset, language: locale } });
    setOffsetState(newOffset);
  };

  const checkDataExistHandler = (str) => {
    const prev = str === "prev";
    if (loading) {
      return "0.5";
    }
    if (data) {
      if (prev) {
        if (data.posts.pageInfo.offsetPagination.hasPrevious) {
          return "1";
        } else {
          return "0.5";
        }
      } else {
        if (data.posts.pageInfo.offsetPagination.hasMore) {
          return "1";
        } else {
          return "0.5";
        }
      }
    } else {
      if (prev) {
        if (devices.pageInfo.offsetPagination.hasPrevious) {
          return "1";
        } else {
          return "0.5";
        }
      } else {
        if (devices.pageInfo.offsetPagination.hasMore) {
          return "1";
        } else {
          return "0.5";
        }
      }
    }
  };

  const showArrow = (display) => {
    return (
      <Container display={display}>
        <Icon
          onClick={() => getDataHandler("prev")}
          opacity={checkDataExistHandler("prev")}
          icon="/leftArrow.svg"
        />
        <Icon
          onClick={(e) => getDataHandler(e, null)}
          opacity={checkDataExistHandler(null)}
          icon="/rightArrow.svg"
        />
      </Container>
    );
  };

  return (
    devices?.nodes &&
    devices.nodes.length && (
      <Space>
        {showArrow(false)}
        {!loading ? (
          <Products
            more={true}
            locale={locale}
            products={data ? data.posts.nodes : devices.nodes}
          />
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <StyledLoader />
        )}
        {showArrow(true)}
      </Space>
    )
  );
};
