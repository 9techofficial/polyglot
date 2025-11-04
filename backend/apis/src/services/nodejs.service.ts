import axios from "axios";

const port = 4001;
const apiUrl = `http://localhost:${port}`;

class NodejsService {
  async getApi() {
    try {
      const response = await axios.get(`${apiUrl}/api`);
      return response.data;
    } catch (error) {
      console.error('Error calling Nodejs API:', error);
      throw error;
    }
  }
}

export default new NodejsService();
