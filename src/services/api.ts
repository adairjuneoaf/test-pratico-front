// Main Dependencies

// Services Dependencies
import { api } from "./axios";

// Typings[TypeScript]

type DataFetchedAPI = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    bs: string;
  };
};

export const getAllUsers = async () => {
  const data: Array<DataFetchedAPI> = await api
    .get("/users")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return new Error("fetch data all users in API.");
    })
    .finally(() => {});

  return data;
};

export const getUniqueUser = async (id: number) => {
  const data: DataFetchedAPI = await api
    .get(`/users/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return new Error("fetch data unique user in API.");
    })
    .finally(() => {});

  return data;
};
