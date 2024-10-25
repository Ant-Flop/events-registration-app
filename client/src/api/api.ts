import axios from "axios";

export const getEvents = async () => {
  const result = await axios.get("/getEvents");

  return result;
};

export const getUsersByEvent = async (id: number) => {
  const result = await axios.post("/getUsersByEvent", {
    eventId: id,
  });

  return result;
};

export const requestToRegisterUser = async (data: any) => {
  const result = await axios.post("/registerUser", {
    data: data,
  });

  return result;
};
