import axios from "axios";

const port = 4005;
const apiUrl = `http://localhost:${port}`;

class HonoService {
  async getApi() {
    try {
      const response = await axios.get(`${apiUrl}/api`);
      return response.data;
    } catch (error) {
      console.error('Error calling Hono API:', error);
      throw error;
    }
  }
}

export default new HonoService();
