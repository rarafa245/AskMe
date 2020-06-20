import axios from 'axios'

async function axiosGetQuestions (numberOfQuestions, pagination){

   const response = await axios.get(`http://localhost:5000/allquestions/${numberOfQuestions}/${pagination}`, {
                        headers: {
                            'Authorization': localStorage.getItem('AWT'),
                            'UID': localStorage.getItem('UID')
                        }
                    })
        .then(res => {
            return {
                status: JSON.parse(res.data.status),
                pages: JSON.parse(res.data.pages),
                data: (res.data.status) ? JSON.parse(res.data.message)
                                        : res.data.message
            }
        })
        .catch(err => {
            return {
                status: null,
                pages: '1',
                data: null
            }
        })

    return response
}

export default axiosGetQuestions