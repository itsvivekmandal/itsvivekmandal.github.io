import axios from "axios";

const API_BASE_URL = 'http://127.0.0.1:8080';

const apiService = {
  sendMail: async(data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/send_email`, data);
      // console.log(response.data);
      return response;
    } catch (error) {
      console.error("Error posting data", error);
      return error.response;
    }
  },
  portfolioInfo: async() => {
    try {
      const response = await axios.get(`${API_BASE_URL}/portfolio_info`);
      // console.log(response.data.progressInfo);
      return response;
    } catch (error) {
      // console.error("Error posting data", error);
      return false;
    }
  }

};

export default apiService;