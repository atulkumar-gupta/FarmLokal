import axios from 'axios';

export async function fetchExternalData() {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    timeout: 3000
  });
}