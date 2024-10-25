import { useContext, useEffect, useState } from "react";
import "./styles.css";
import Card from "./Card";
import Pagination from "./Pagination";
import EventsContext from "../../context/EventsContext";

const CARDS_PER_PAGE = 8;

const EventsListPage = () => {
  const { cards, refetchTable } = useContext(EventsContext);

  const [currentPage, setCurrentPage] = useState(0);
  const countPages = Math.ceil(cards.length / CARDS_PER_PAGE);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const startIndex = currentPage * CARDS_PER_PAGE;
  const currentItems = cards.slice(startIndex, startIndex + CARDS_PER_PAGE);

  useEffect(() => {
    refetchTable();
  }, [refetchTable, cards]);

  return (
    <div>
      <div className="title">Events</div>
      <div className="cards-wrapper">
        {currentItems.map((element: any) => (
          <Card key={element.id} card={element} />
        ))}
      </div>
      <div className="pagination-container">
        <button
          className="arrow-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <img
            src="/images/left-arrow.png"
            alt="Previous Page"
            style={{ width: "18px" }}
          />
        </button>

        <Pagination
          currentPage={currentPage}
          countPages={countPages}
          handlePageChange={handlePageChange}
        />
        <button
          className="arrow-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === countPages - 1}
        >
          <img
            src="/images/right-arrow.png"
            alt="Previous Page"
            style={{ width: "18px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default EventsListPage;
