// Styled Dependencies
import { toast } from "react-hot-toast";

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

type DataInsertUserAPI = {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    bs?: string;
  };
};

export const getAllUsers = async () => {
  const data: Array<DataFetchedAPI> = await api.get("/users").then((response) => {
    return response.data;
  });
  // .catch(() => {
  //   return new Error("fetch data all users in API.");
  // });
  // .finally(() => {});

  return data;
};

export const getUniqueUser = async (id: number) => {
  const data: DataFetchedAPI = await api.get(`/users/${id}`).then((response) => {
    return response.data;
  });
  // .catch(() => {
  //   return new Error("fetch data unique user in API.");
  // })
  // .finally(() => {});

  return data;
};

export const insertUniqueUser = async ({ ...data }: DataInsertUserAPI) => {
  await api
    .post("/users", {
      ...data,
    })
    .then(() => {
      return toast.success("Usuário cadastrado com sucesso!");
    });
  // .catch(() => {
  //   return new Error("insert data unique user in API");
  // })
  // .finally(() => {});
};

export const deleteUniqueUser = async (id: number) => {
  await api.delete(`/users/${id}`).then(() => {
    return toast.success("Usuário removido com sucesso!");
  });
  // .catch(() => {
  //   return new Error("delete data unique user in API");
  // })
  // .finally(() => {});
};
