import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hr-management-s.herokuapp.com/'
});

export default instance;