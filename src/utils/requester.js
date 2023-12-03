import { getUserData } from './userData';

const requester = async (method, url, data) => {
  const host = process.env.NODE_ENV === 'production' ? 'https://movie-characters-server.onrender.com' : 'http://localhost:3030';

  try {
    let options = {
      method,
      headers: {},
    };

    if (data) {
      options.headers = {
        'content-type': 'application/json',
      };

      options.body = JSON.stringify(data);
    }

    const user = getUserData();
    if (user) {
      options.headers['auth'] = user.token;
    }

    const response = await fetch(host + url, options);
    const result = await response.json();

    if (!response.ok) {
      if (response.status === 403) {
        sessionStorage.removeItem('user');
        document.location.href = '/';
      }

      throw result;
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');
