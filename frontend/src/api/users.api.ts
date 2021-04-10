import axios from "axios"

export const getAllUsers = async () => {
    try {
        const { data, status } = await axios.get('/api/v1/user', );        
        return status===200 ? data : [];
    } catch (err) {
        console.error(err);
        return []
    }
}
export const getAUserId = async (id='') => {
    try {
        const { data, status } = await axios.get(`/api/v1/user/${id}`);        
        return status===200 ? {...data.user,puesto:data.data.puesto} : null;
    } catch (err) {
        console.error(err);
        return null
    }
}