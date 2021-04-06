import { useEffect, useState } from "react";
import { Icon, NumberOfPage, Container } from "./paginationStyled";
import {scroller} from "react-scroll";

export const LocalPagination = ({ element, items, onChangePage }) => {
  const [pager, setPager] = useState({});

  useEffect(() => {
    items && items.length && HandlerSetPage(1);
  }, []);

  useEffect(() => {
    HandlerSetPage(1);
  }, [items]);

  const HandleGetPager = (totalItems, currentPage, pageSize) => {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 9
    pageSize = pageSize || 9;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 9) {
      // less than 9 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 9 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 9;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 8;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  const HandlerSetPage = (page) => {
    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    let newPager = HandleGetPager(items.length, page);

    // get new page of items from items array
    const pageOfItems = items.slice(newPager.startIndex, newPager.endIndex + 1);

    // update state
    setPager(newPager);

    // call change page function in parent component
    onChangePage(pageOfItems);
  };
  const HandleChangePage = (number) =>{
    HandlerSetPage(number)
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  return (
    <Container>
      <Icon
        onClick={() => HandleChangePage(pager.currentPage - 1)}
        opacity={pager.currentPage === 1 ? "0.5" : "1"}
        icon="/leftArrow.svg"
      />
      <ul>
        {pager &&
          pager.pages &&
          pager.pages.map((page, index) => (
            <NumberOfPage
              key={index}
              current={pager.currentPage === page}
              onClick={() => HandleChangePage(page)}
            >
              {page}
            </NumberOfPage>
          ))}
      </ul>
      <Icon
        opacity={pager.currentPage === pager.totalPages ? "0.5" : "1"}
        onClick={() => HandleChangePage(pager.currentPage + 1)}
        icon="/rightArrow.svg"
      />
    </Container>
  );
};
