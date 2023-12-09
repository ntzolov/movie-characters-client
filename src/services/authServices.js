import * as request from '../utils/requester';
import { trimmer } from '../utils/trimmer';

export const register = async (userDataObject) => {
  try {
    trimmer(userDataObject);

    const result = await request.post('/auth/register', userDataObject);

    return result;
  } catch (error) {
    throw error;
  }
};

export const login = async (userDataObject) => {
  try {
    trimmer(userDataObject);

    const result = await request.post('/auth/login', userDataObject);

    return result;
  } catch (error) {
    throw error;
  }
};
