import axios from "axios"

export const getAllUsers = async (token = '') => {
    console.log('token ',token);
    const { data } = await axios.get('/api/v1/user', { headers:{'x-access-tokens':token}});
    console.log(data);

    return data;
}