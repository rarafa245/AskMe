import axios from 'axios'

async function axiosRegisterAnswer (body) {

   const response = await axios.post('http://192.168.0.23:5000/postAnswer', body, {
                        headers: {
                            'Authorization': localStorage.getItem('AWT'),
                            'UID': localStorage.getItem('UID')
                        }
                    })
        .then(res => {
            return {
                status: res.data.status,
                message: res.data.message
            }
        })
        .catch(err => {
            return {
                status: false,
                message: 'An Error Ocurrer, Try Again!'
            }
        })

    return response
}

export default axiosRegisterAnswer