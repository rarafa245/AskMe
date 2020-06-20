import axios from 'axios'

async function axiosRegister (body){

   const response = await axios.post('http://192.168.0.23:5000/register', body)
        .then(res => {
            return {
                status: res.data.status,
                message: res.data.message
            }
        })
        .catch(error => {
            return {
                status: false,
                message: 'An Error Has Occurred. Try Again !'
            }
        })
    
    return response
}

export default axiosRegister