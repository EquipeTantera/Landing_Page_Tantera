import axios from "axios";

// Configuração base do Axios para conectar com o backend Strapi
const api = axios.create({
  baseURL: "http://localhost:1337/api", // Substitua pela URL correta do seu backend Strapi
});

// Função para buscar todos os parceiros
export const getPartners = async () => {
  try {
    const response = await api.get("/partners?populate=*"); 
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar parceiros:", error);
    throw error;
  }
};

export default api;
