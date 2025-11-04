import axios from "axios";

const port = 8000;
const apiUrl = `http://localhost:${port}`;

class PhpService {
  async getApi() {
    try {
      const response = await axios.get(`${apiUrl}/api`);
      return response.data;
    } catch (error) {
      console.error('Error calling Php API:', error);
      throw error;
    }
  }
}

export default new PhpService();
