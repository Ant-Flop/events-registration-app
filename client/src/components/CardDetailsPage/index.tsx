import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardsContext from "../../context/EventsContext";
import "./styles.css";
import Table from "./Table";

const CardDetailsPage = () => {
  const { cards } = useContext(CardsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const card = cards.find((c) => c.id === parseInt(id as string));

  if (!card) {
    return <p>Card not found</p>;
  }

  const handleToEventsClick = () => {
    navigate(`/`);
  };

  const handleRegisterClick = () => {
    navigate(`/register/${card.id}`);
  };

  return (
    <div className="card-detail-wrapper">
      <div className="title">Details of event</div>

      <div className="content-wrapper">
        <div className="left-content">
          <h1 className="details-title">{card.title}</h1>
          <p className="description">
            <strong>Description:</strong> {card.description}
          </p>
          <p className="details">
            <strong>Meeting Date:</strong> {card.dateMeeting}
          </p>
          <p className="details">
            <strong>Organizer:</strong> {card.organizer}
          </p>
          <div className="button-container">
            <button className="button" onClick={handleToEventsClick}>
              To Events
            </button>
            <button className="button" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        </div>
        <Table id={id as string} />
      </div>
    </div>
  );
};

export default CardDetailsPage;
