import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

  }
  return config;
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserPosts = async (userId: string) => {
  const response = await api.get(`/users/${userId}/posts`);
 
  
  return response.data;
};

export const getPostComments = async (postId: string) => {
  const response = await api.get(`/posts/${postId}/comments`);
  return response.data;
};