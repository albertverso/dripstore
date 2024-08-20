import apiUrl from "./apiService";

export const GetProduct = async (page, limit) => {
    try {
        const response = await fetch(apiUrl+`/v1/product/search?page=${page}&limit=${limit}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
          });

        const data = await response.json();

        if (response.status === 201) {
            return data
        }
        else {
            throw new Error("Erro na requisição: " + response.error);
        }
    }catch (error) {
        console.error('Erro na requisição de login:', error);
        throw error;
      }
}