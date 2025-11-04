import axios from "axios";

const port = 4004;
const apiUrl = `http://localhost:${port}`;

class GoService {
  async getApi() {
    try {
      const response = await axios.get(`${apiUrl}/api`);
      return response.data;
    } catch (error) {
      console.error('Error calling Go API:', error);
      throw error;
    }
  }
}

export default new GoService();