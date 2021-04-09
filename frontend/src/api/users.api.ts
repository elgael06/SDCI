import axios from "axios"

export const getAllUsers = async (token = '') => {
    const { data } = await axios.get('/api/v1/user', { headers:{'x-access-tokens':token}});
    return data;
}