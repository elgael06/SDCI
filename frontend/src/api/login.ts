import axios from 'axios';

export const login = async (username = '', password = '') => {
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
    try {
        const { data } = await axios.post('/api/v1/sesion/login',
            { email: username }, {
            headers: {
                'Authorization': `Basic ${token}`
            },
        });
        return data;
    } catch(error){
        return {
            message: error.toString(),
            status: false,
            sesion:null
        }
    }
}