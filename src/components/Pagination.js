import styled, { css } from 'styled-components';
import mixins from 'mixins';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${mixins.spaceX('0.25rem')};
  ${mixins.sm`
    ${mixins.spaceX('0.5rem')}
  `};
`;

const iconStyle = css`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  opacity: 0.5;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${mixins.sm`
    width: 1.5rem;
    height: 1.5rem;
  `};

  &:hover {
    ${props => (!props.disabled ? 'opacity: 1' : null)}
  }
`;
const StyledChevronLeft = styled(ChevronLeftIcon)`
  ${iconStyle}
`;
const StyledChevronRight = styled(ChevronRightIcon)`
  ${iconStyle}
`;

const Number = styled.span`
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  ${mixins.rounded('md')};
  ${props =>
    props.active
      ? `background-color: var(--primary-600); color: white;`
      : null};

  &:hover {
    ${props => (!props.active ? 'background-color: #F4F4F5' : null)};
  }
`;

const Dots = styled.span`
  padding: 0.25rem 0.25rem;
  ${mixins.sm`
    padding: 0.25rem 0.75rem;
  `}
`;

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  delta = 2,
  onPageChange = () => null,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const goToPrev = () => onPageChange(currentPage - 1);
  const goToNext = () => onPageChange(currentPage + 1);
  const goToPage = i => onPageChange(i);

  const renderNumber = i => {
    return (
      <Number key={i} active={currentPage === i} onClick={() => goToPage(i)}>
        {i}
      </Number>
    );
  };

  const renderDots = key => <Dots key={key}>...</Dots>;

  const generatePages = () => {
    let pages = [],
      left = currentPage - delta,
      right = currentPage + delta,
      prev;

    // First page + dots
    pages.push(renderNumber(1));
    if (left - 1 > 1) {
      pages.push(renderDots(2));
    }
    // Generate middle pages + dots
    for (let i = left; i <= right; i++) {
      if (i < totalPages && i > 1) {
        pages.push(renderNumber(i));
        prev = i;
      }
    }
    // Last page + dots
    if (totalPages - prev > 1) {
      pages.push(renderDots(prev + 1));
    }
    if (totalPages > 1) {
      pages.push(renderNumber(totalPages));
    }

    return pages;
  };

  return (
    <Wrapper>
      {/* Previous page */}
      <StyledChevronLeft
        disabled={isFirstPage}
        onClick={!isFirstPage ? goToPrev : null}
      />
      {/* Middle pages */}
      {currentPage >= 1 && totalPages >= currentPage ? generatePages() : null}
      {/* Next page */}
      <StyledChevronRight
        disabled={isLastPage}
        onClick={!isLastPage ? goToNext : null}
      />
    </Wrapper>
  );
};

export default Pagination;
