import Link from "next/link";
import { NumberOfPage, Container, Arrows, Icon } from "./paginationStyled";

export const Pagination = ({
  currentPageNumber,
  endPage,
  startPage,
  href,
  hasMore,
  hasPrevious,
}) => {
  const nextArrowClick =
    currentPageNumber === 0 ? currentPageNumber + 2 : currentPageNumber + 1;
  const showArrow = (arrow) => {
    if (arrow === "left") {
      if (hasPrevious) {
        return (
          <Link
            href={`/${href}/page/[currentPage]`}
            as={`/${href}/page/${currentPageNumber - 1}`}
          >
            <a>
              <Icon opacity="1" icon="/leftArrow.svg" />
            </a>
          </Link>
        );
      } else {
        return <Icon opacity="0.5" icon="/leftArrow.svg" />;
      }
    } else {
      if (hasMore) {
        return (
          <Link
            href={`/${href}/page/[currentPage]`}
            as={`/${href}/page/${nextArrowClick}`}
          >
            <a>
              <Icon opacity="1" icon="/rightArrow.svg" />
            </a>
          </Link>
        );
      } else {
        return <Icon opacity="0.5" icon="/rightArrow.svg" />;
      }
    }
  };

  return (
    <Container>
      {showArrow("left")}
      <ul>
        {[...Array(endPage + 1 - startPage).keys()].map((i) => (
          <Link
            key={i}
            href={`/${href}/page/[currentPage]`}
            as={`/${href}/page/${startPage + i}`}
          >
            <a>
              <NumberOfPage
                current={
                  startPage + i === currentPageNumber ||
                  (currentPageNumber === 0 && currentPageNumber === i)
                }
              >
                {startPage + i}
              </NumberOfPage>
            </a>
          </Link>
        ))}
      </ul>
      {showArrow()}
    </Container>
  );
};
