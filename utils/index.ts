import axios from 'axios';
import jwt_decode from 'jwt-decode';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (response: any) => {
  const decoded = jwt_decode(response.credential);
  console.log(decoded);
};
