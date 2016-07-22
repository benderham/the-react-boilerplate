import Fetch from 'whatwg-fetch';
const baseUrl = 'http://localhost:6069';

const service = {
  get(url) {
    return fetch(baseUrl + url)
    .then(response => response.json());
  },
  post(url, ingredient) {
    return fetch(baseUrl + url, {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(ingredient)
    }).then(response => response);
  }
};

export default service;
