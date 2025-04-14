import axios from 'axios'

export default(url='here-goes-the-url.com') => {
    return axios.create({
        baseURL: url,
    })
}