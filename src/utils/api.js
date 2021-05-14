export const API = 'http://localhost:8000/api';

export const request = async (method, url, data = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const options = {
    headers,
    method: method.toUpperCase(),
    body: data ? JSON.stringify(data) : null,
  };

  const response = await fetch(`${API + url}`, options);

  if (response.ok) {
    const string = await response.text();
    const json = string === '' ? {} : JSON.parse(string);

    return json;
  }

  throw await response.json();
};

export const get = (url) => request('get', url);
