import React, { createContext, useState, ReactNode, useCallback } from "react";
import { getEvents } from "../api/api";

interface Card {
  id: number;
  title: string;
  description: string;
  dateMeeting: string;
  organizer: string;
}

interface IEventsContext {
  cards: Card[];
  getCardById: (id: number) => Card | undefined;
  refetchTable: () => Promise<void>;
}

const initialCards: Card[] = [
  {
    id: 1,
    title: "title1",
    description:
      "description1 Задача организации, в особенности же укрепление и развитие структуры представляет собой интересный эксперимент проверки дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности требуют определения и уточнен",
    dateMeeting: "25.09.2024",
    organizer: "Blovoski",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    dateMeeting: "26.09.2024",
    organizer: "Blovoski",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    dateMeeting: "27.09.2024",
    organizer: "Blovoski",
  },
  {
    id: 4,
    title: "title4",
    description: "description4",
    dateMeeting: "28.09.2024",
    organizer: "Blovoski",
  },
  {
    id: 5,
    title: "title5",
    description: "description5",
    dateMeeting: "29.09.2024",
    organizer: "Blovoski",
  },
  {
    id: 6,
    title: "title6",
    description: "description6",
    dateMeeting: "30.09.2024",
    organizer: "Blovoski",
  },
  {
    id: 7,
    title: "title7",
    description: "description7",
    dateMeeting: "01.10.2024",
    organizer: "Blovoski",
  },
  {
    id: 8,
    title: "title8",
    description: "description8",
    dateMeeting: "02.10.2024",
    organizer: "Blovoski",
  },
  {
    id: 9,
    title: "title9",
    description: "description9",
    dateMeeting: "03.10.2024",
    organizer: "Blovoski",
  },
];

const defaultContext: IEventsContext = {
  cards: [],
  getCardById: () => undefined,
  refetchTable: async () => {},
};

export const EventsContext = createContext<IEventsContext>(defaultContext);

export const EventsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cards, setCards] = useState<Card[]>(initialCards);

  const getCardById = (id: number) => {
    return cards.find((card) => card.id === id);
  };

  const refetchTable = useCallback(async () => {
    try {
      const { data } = await getEvents();
      setCards(data);
    } catch {
      setCards(initialCards);
    }
  }, []);

  return (
    <EventsContext.Provider value={{ cards, getCardById, refetchTable }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
