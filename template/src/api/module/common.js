import axios from '../interceptor';
const getSideModules = (id) => {
    return axios.post(`/v2/desktop/module`, { id });
}
const getLanguage = (id) => {
    return axios({
        method: "get",
        url: `/v2/lang/${id}`
    })
}

export {
    getSideModules,
    getLanguage
}

