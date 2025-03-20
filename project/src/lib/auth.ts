import axios from 'axios';

interface RegisterResponse {
  clientID: string;
  clientSecret: string;
}

interface AuthResponse {
  access_token: string;
}

interface RegisterData {
  companyName: string;
  ownerName: string;
  rollNo: string;
  ownerEmail: string;
  accessCode: string;
}

interface AuthData {
  companyName: string;
  clientID: string;
  clientSecret: string;
  ownerName: string;
  ownerEmail: string;
  rollNo: string;
}

const BASE_URL = 'http://20.244.56.144/test';

export const register = async (data: RegisterData): Promise<RegisterResponse> => {
  const response = await axios.post(`${BASE_URL}/register`, data);
  return response.data;
};

export const authenticate = async (data: AuthData): Promise<AuthResponse> => {
  const response = await axios.post(`${BASE_URL}/auth`, data);
  return response.data;
};