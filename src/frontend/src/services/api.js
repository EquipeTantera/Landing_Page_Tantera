import axios from "axios";

const api = axios.create({
  baseURL: "https://tantera-back.onrender.com/api/",
  timeout: 5000,
});

export const get = async (endpoint, params) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Erro na solicitação GET:", error);
    throw error;
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Erro na solicitação POST:", error);
    throw error;
  }
};
