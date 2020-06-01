import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hr-ms-s.herokuapp.com/'
});

export default instance;