const Pagination = ({
  currentPage,
  countPages,
  handlePageChange,
}: {
  currentPage: number;
  countPages: number;
  handlePageChange: any;
}) => {
  const renderPages = () => {
    if (countPages <= 5) {
      return Array.from({ length: countPages }, (_, i) => (
        <button
          key={i}
          className={`pagination-btn ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i + 1}
        </button>
      ));
    }

    const pages = [
      <button
        key={0}
        className={`pagination-btn ${currentPage === 0 ? "active" : ""}`}
        onClick={() => handlePageChange(0)}
      >
        1
      </button>,
    ];

    if (currentPage > 2) {
      pages.push(
        <span key="left-dots" className="dots">
          ...
        </span>
      );
    }

    if (currentPage > 1 && currentPage < countPages - 2) {
      pages.push(
        <button
          key={currentPage}
          className="pagination-btn active"
          onClick={() => handlePageChange(currentPage)}
        >
          {currentPage + 1}
        </button>
      );
    }

    if (currentPage < countPages - 3) {
      pages.push(
        <span key="right-dots" className="dots">
          ...
        </span>
      );
    }

    pages.push(
      <button
        key={countPages - 1}
        className={`pagination-btn ${
          currentPage === countPages - 1 ? "active" : ""
        }`}
        onClick={() => handlePageChange(countPages - 1)}
      >
        {countPages}
      </button>
    );

    return pages;
  };

  return <div className="pagination-container">{renderPages()}</div>;
};

export default Pagination;
