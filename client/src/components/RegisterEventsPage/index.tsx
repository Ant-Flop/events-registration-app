import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardsContext from "../../context/EventsContext";
import "./styles.css";

const RegisterEventsPage = () => {
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

  const handleViewClick = () => {
    navigate(`/card/${card.id}`);
  };

  return (
    <div>
      <div className="title">Registration on {card.title}</div>
      <div className="form-container">
        <div className="form-field">
          <label className="label">Name Surname</label>
          <input type="text" placeholder="Name Surname" className="input" />
        </div>

        <div className="form-field">
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            className="input"
          />
        </div>

        <div className="form-field">
          <label className="label">Birthday</label>
          <input type="date" className="input" />
        </div>

        <div className="form-field">
          <label className="label">Where did you hear about this event?</label>
          <input type="text" placeholder="Source" className="input" />
        </div>

        <div className="button-container">
          <button className="button" onClick={handleToEventsClick}>
            To Events
          </button>
          <button className="button" onClick={handleViewClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterEventsPage;
