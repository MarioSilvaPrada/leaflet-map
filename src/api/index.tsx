import axios from 'axios';
import { IUser } from 'utils/interfaces';

export const PRODUCTION = false;

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const getAllUsers = async (): Promise<IUser[] | null> => {
  try {
    const { status, data } = await api.get('users');

    if (status === 200) {
      return data;
    }

    return null;
  } catch (e) {
    return e.response;
  }
};

export { getAllUsers };
