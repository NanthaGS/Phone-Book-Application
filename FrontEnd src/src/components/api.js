import axios from "axios";

const BASE_URL = "http://localhost:8181/api/v1/auth/authenticate"; // Replace with your backend URL

export const logins = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
