import axios from 'axios'

async function axiosGetQuestionSimple(username, id_question) {

   const response = await axios.get(`http://192.168.0.23:5000/questionSimple/${username}/${id_question}`, {
                        headers: {
                            'Authorization': localStorage.getItem('AWT'),
                            'UID': localStorage.getItem('UID')
                        }
                    })
        .then(res => {
            localStorage.setItem('AWT', res.data.token)
            return {
                status: res.data.status,
                title: res.data.title,
                content: res.data.content
            }
        })
        .catch(err => {
            return {
                status: false,
                title: null,
                content: 'An Error Has Ocurred. Please, Try Again!'
            }
        })

    return response
}

export default axiosGetQuestionSimple