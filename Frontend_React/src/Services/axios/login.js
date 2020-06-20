import axios from 'axios'

async function axiosLogin (body){

   const response = await axios.post('http://localhost:5000/login', body)
        .then(res => {
            if (res.data.status) {
                return {
                    status: res.data.status,
                    message: 'SUCCESS',
                    AWT: res.data.token,
                    UID: res.data.username
                }
            } 
            else {
                return {
                    status: res.data.status,
                    error: false,
                    message: 'FAILURE',
                }
            }
        })
        .catch(err => {
            return {
                status: false,
                error: true,
                message: 'FAILURE',
            }
        })
    
    return response
}

export default axiosLogin