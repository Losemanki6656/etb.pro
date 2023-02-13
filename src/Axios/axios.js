import router from '../router'
import axios from "axios";

let $axios = axios.create({
    baseURL: 'http://cadry.pro/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

$axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`

$axios.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 401) {
        router.push({ name: 'login' }).then(r => r)
    } 
    
    else 
    
    if (!error.response.status) {
        $('#isOnline').addClass('online-message-active');
        setTimeout(function () {  $('#isOnline').removeClass('online-message-active'); }, 4000)
    }

    return Promise.reject(error)
})

$axios.interceptors.response.use((response) => response, error => {
    

    return Promise.reject(error)
})

window.$axios = $axios;