import {useEffect, useLayoutEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

export const getYoutubeThumbnail = (url) => {
  if (url === null) {
    return '';
  }
  const results = url.match('[\\?&]v=([^&#]*)');
  const video   = (results === null) ? url : results[1];


  return 'http://img.youtube.com/vi/' + video + '/0.jpg';
};

export const startEndPagination = (currentPage, totalPages) => {
  let startPage, endPage;
  if (totalPages <= 7) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 7;
    } else if (currentPage + 3 >= totalPages) {
      startPage = totalPages - 6;
      endPage = totalPages;
    } else {
      startPage = currentPage - 3;
      endPage = currentPage + 3;
    }
  }
  return { startPage, endPage };
};
export const separatePriceAndCurrency = (str) => {
  const replaceSpace =  str.replace(/\s/g,'')
  const price = replaceSpace.replace(/\D/g, "");
  const currency = replaceSpace.replace(price, "");
  return {price ,currency}
}
export const addSpacesBetweenNumbers = (str, count) => {
  const price =  Number(str) * count
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
export const sendGmail = async (sendContent) => {
  const data = {
    sendContent
  };

  try {
    const res = await axios({
      method: "post",
      url: "/api/orderProduct",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      data,
    });
    return res;
  } catch (error) {
    return error;
  }
};
export const sendStatementHook = async (sendContent) => {
  const data = {
    sendContent
  };

  try {
    const res = await axios({
      method: "post",
      url: "/api/sendStatement",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      data,
    });
    return res;
  } catch (error) {
    return error;
  }
};