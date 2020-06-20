import axios from 'axios'

async function axiosPostQuestions(questionCreateInfos) {

   const response = await axios.post('http://localhost:5000/regQuestion', questionCreateInfos , {
                        headers: {
                            'Authorization': localStorage.getItem('AWT'),
                            'UID': localStorage.getItem('UID')
                        }
                    })
        .then(res => {
            localStorage.setItem('AWT', res.data.token)
            return {
                status: res.data.status,
                error: false,
                message: res.data.message
            }
        })
        .catch(err => {
            return {
                error: true,
                message: 'Session Expired! Timeout!'
            }

        })
    
    return response
    
}

export default axiosPostQuestions