import axios from 'axios'

async function getQuestionAndAnswers (questionAuthor, questionId){

   const response = await axios.get(`http://192.168.0.23:5000/question/${questionAuthor}/${questionId}`)
        .then(res => {
            return {
                status: res.data.status,
                author: res.data.author,
                data: res.data.data,
                title: res.data.title,
                content: res.data.content,
                answers: res.data.answers,
                error: false
            }
        })
        .catch(err => {
            return {
                status: null,
                author: null,
                data: null,
                title: null,
                content: null,
                answers: null,
                error: true
            }
        })

    return response
}

export default getQuestionAndAnswers