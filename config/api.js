import axios from 'axios';

export default axios.create({
    baseURL: `https://owen-wilson-wow-api.herokuapp.com/wows/`,
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': "JWT " + localStorage.getItem('token')
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});