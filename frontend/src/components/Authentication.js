import axios from "axios";

const API_URL = "http://localhost:8000/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "token-auth/", {
        username,
        password
      })
      .then(response => {
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data));
          
        }
        console.log(response.data);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  register(username, password) {
    return axios.post(API_URL + "users/", {
      username,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user").username);;
  }
}

export default new AuthService();
