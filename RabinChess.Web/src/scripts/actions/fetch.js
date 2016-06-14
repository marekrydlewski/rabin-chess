import apiConfig from '../api_config';

function getInitFetch(method, body, token) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `bearer ${token}`);

  const initFetch = {
    method,
    headers,
    mode: 'cors'
  };

  if (method === 'POST' || method === 'PATCH') {
    initFetch.body = body;
  }
  return initFetch;
}

/**
* Fetch data from api
*/
export function fetchData(dispatch, url) {
  const initFetch = getInitFetch(method, body, token);
  let status;
  return fetch(apiConfig.url + url, initFetch)
    .then(response => {
      status = response.status;
      return response.json();
    })
    .then(response => {
      if (status < 200 || status >= 300) {
        console.log(`API ERROR: status ${status}`);
        console.log(response);
      }
      return response;
    })
}
