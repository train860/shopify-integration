
import axios from 'axios';

export function info() {
  return axios.get('/api/shop/info');
}
