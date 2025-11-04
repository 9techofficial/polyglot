import axios from "axios";

const port = 4003;
const apiUrl = `http://localhost:${port}`;

class PythonService {
  async getApi() {
    try {
      const response = await axios.get(`${apiUrl}/api`);
      return response.data;
    } catch (error) {
      console.error('Error calling Python API:', error);
      throw error;
    }
  }
}

export default new PythonService();
