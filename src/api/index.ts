import axios from 'axios';

export const BASE_URL = 'https://test2.sionic.ru';

export default axios.create({
  baseURL: `${BASE_URL}/api`,
});
