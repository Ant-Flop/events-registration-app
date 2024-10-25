import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventsListPage from "./components/EventsListPage";
import CardDetailsPage from "./components/CardDetailsPage";
import RegisterEventsPage from "./components/RegisterEventsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsListPage />} />
        <Route path="/register/:id" element={<RegisterEventsPage />} />
        <Route path="/card/:id" element={<CardDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
