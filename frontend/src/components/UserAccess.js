import axios from 'axios';
import authHeader from './Auth-Header';

const API_URL = 'http://localhost:8080/api/';

class UserAccess {
  getSongContent() {
    return axios.get(API_URL + 'songs', { headers: authHeader() });
  }

  getRatingContent() {
    return axios.get(API_URL + 'ratings', { headers: authHeader() });
  }
}

export default new UserAccess();
