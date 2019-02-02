import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 55159597b7e9752aec40d67a4b1b3cf0c51f4b18d4e60988b9089700304539f8'
  }
});