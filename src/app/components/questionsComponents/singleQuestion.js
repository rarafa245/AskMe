import React, { useReducer,useEffect } from 'react'
import axios from 'axios'

function SingleQuestion (props) {

    const question_id = props.match.params.id
    const question_author = props.match.params.username



    useEffect(() => {

        axios.get(`http://localhost:5000/question/${question_author}/${question_id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(question_id)
            console.log(question_author)
        })
    }, [])


    return(
        <div className="card mt-2 p-4" >
            <div className="border-bottom mb-3">
                <h1 className="title">Ola Mundo</h1>
                <p className="m-1"><b>Author: </b>Rafa.Ferreira 2020-04-05</p>
            </div>
            <div>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
            </div>
        </div>
    )
}

export default SingleQuestion