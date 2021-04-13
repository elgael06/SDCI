import axios from 'axios';

export const login = async (username = '', password = '') => {
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
    try {
        const { data,status } = await axios.post('/api/v1/sesion/login',
            { email: username }, {
            headers: {
                'Authorization': `Basic ${token}`
            },
        });
        if (status == 200) {            
            axios.defaults.headers.post['x-access-tokens'] = data.token;
            axios.defaults.headers.get['x-access-tokens'] = data.token;
            axios.defaults.headers.put['x-access-tokens'] = data.token;
            axios.defaults.headers.delete['x-access-tokens'] = data.token;
        }
        return {...data,res:status};
    } catch(error){
        return {
            message: error.toString(),
            status: false,
            sesion:null
        }
    }
}