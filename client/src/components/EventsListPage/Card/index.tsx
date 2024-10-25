import { useNavigate } from "react-router-dom";
import "./styles.css";

interface CardProps {
  card: {
    id: number;
    title: string;
    description: string;
    dateMeeting: string;
    organizer: string;
  };
}

const Card = ({ card }: CardProps) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/card/${card.id}`);
  };

  const handleRegisterClick = () => {
    navigate(`/register/${card.id}`);
  };

  return (
    <div className="card">
      <h2 className="card-title">{card.title}</h2>
      <p className="card-description">{card.description}</p>
      <p className="card-date">Meeting Date: {card.dateMeeting}</p>
      <p className="card-organizer">Organizer: {card.organizer}</p>
      <div className="button-container">
        <button className="button" onClick={handleRegisterClick}>
          Register
        </button>
        <button className="button" onClick={handleViewClick}>
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
