// This is where all the routes are initiated from the backend to the front end
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

// const url = 'http://localhost:5000';

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
