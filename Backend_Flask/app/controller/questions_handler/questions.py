from app.controller.token_dec import token_require
from flask import Blueprint, request, current_app, jsonify
from app.model import *

questions_bp = Blueprint('questions', __name__)

@questions_bp.route("/regQuestion", methods=["GET", "POST"])
@token_require
def register_question(user, new_token):
    ''' Register current question received from HTTP protocol
        :parram - http request.headers: (Username / Token)
                - request.form: questions infos (Title, Content)
        :return - Json string with Success / Fail of storage
    '''

    if request.method == 'POST':
        insert = insert_table_questions(username=user,
                                           title=request.form['title'],
                                           content=request.form['content'])

        return jsonify({
                'status': insert.status,
                'message': insert.message,
                'token': new_token.decode('UTF-8')
                })


@questions_bp.route("/updateQuestion", methods=["PATCH"])
@token_require
def change_question(user, new_token):
    ''' Update current question received
        :parram - http request.headers: (Username / Token)
                - request.form: questions infos (Title, Content)
        :return - Json string with Success / Fail of update
    '''

    if request.method == 'PATCH':
        update = update_question(username=user,
                                    id_question=request.form['id_question'],
                                    title=request.form['title'],
                                    content=request.form['content'])

        return jsonify({
                'status': update.status,
                'message': update.message,
                'token': new_token.decode('UTF-8')
                })




@questions_bp.route("/deleteQuestion", methods=["DELETE"])
@token_require
def delete_question(user, new_token):
    ''' Delete current question in DB
        :parram - http request.headers: (Username / Token)
                - id of the question
        :return - Json string with Success / Fail of storage
    '''

    if request.method == 'DELETE':
        delete = delete_question_by_id(id_question=request.form['id_question'])

        return jsonify({
                'status': delete.status,
                'message': delete.message,
                })


@questions_bp.route("/questionSimple/<username>/<id_question>", methods=["GET"])
@token_require
def single_question_simple(user, new_token, username, id_question):
    ''' Return an especific question of an user
        :param - http url params: - username: required username
                                  - id_question: id of the required question
        :return sting with question infos
    '''

    if request.method == 'GET':
        question = user_question_simple(username=username,
                                        id_question=id_question)

        if question:
            return jsonify({
                'status': True,
                'title': question.title,
                'content': question.content,
                'token': new_token.decode('UTF-8')
            })
        else:
            return jsonify({
                'status': False,
                'title': None,
                'content': 'Question Not Found',
                'token': new_token.decode('UTF-8')
            })


@questions_bp.route("/allquestions/<collection>/<page>", methods=["GET", "POST"])
@token_require
def all_questions(user, new_token, collection, page):
    ''' Return some questions in pagination mode
        :parram - http request.headers: (Username / Token)
                - http url params: - collection: number of questions per page
                                   - page: the page displayed
        :return: json string with informations of the questions
    '''

    if request.method == 'GET':
        questions = user_all_questions(user,
                                    collection=int(collection),
                                    page=int(page))

        return jsonify({
                'status': questions.status,
                'message': questions.data,
                'pages': questions.pages,
                'token': new_token.decode('UTF-8')
                })


@questions_bp.route("/question/<username>/<id_question>", methods=["GET", "POST"])
def single_question(username, id_question):
    ''' Return an especific question with answers
        :param - http url params: - username: required username
                                  - id_question: id of the required question
        :return sting with question infos
    '''

    if request.method == 'GET':
        question = user_question(username, id_question)

        return jsonify({
            'status': question.status,
            'author': question.author,
            'data': question.data,
            'title': question.title,
            'content': question.content,
            'answers': question.answers
        })
