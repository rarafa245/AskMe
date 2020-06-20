import axios from 'axios'

async function axiosEditQuestion (questionInfo) {

    const response = await axios.patch('http://localhost:5000/updateQuestion', questionInfo, {
                        headers: {
                            'Authorization': localStorage.getItem('AWT'),
                            'UID': localStorage.getItem('UID')
                        }
                    })
        .then(res => {
            localStorage.setItem('AWT', res.data.token)
            return {
                status: res.data.status,
                message: res.data.message,
            }
        })
        .catch(err => {
            return {
                status: false,
                message: 'An Error Ocurred. Please, Try Again!',
            }
        })
        
    return response
}

export default axiosEditQuestion