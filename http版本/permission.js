import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
})

export default service