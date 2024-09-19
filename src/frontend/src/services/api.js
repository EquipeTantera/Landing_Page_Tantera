import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api/",
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