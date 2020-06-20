from flask import Blueprint, request, current_app, jsonify
from app.model import *
from app.controller.token_dec import token_require

answers_bp = Blueprint('answers', __name__)

@answers_bp.route("/postAnswer", methods=["GET", "POST"])
@token_require
def post_answer(user, new_token):
    ''' Adding an Answer to an especific question
        :parram - http request.headers: (Username / Token)
                - request.form: answers infos (Username, id_question, Content)
    '''

    if request.method == 'POST':
        insert = insert_table_answares(id_question=request.form['id_question'],
                                       username=request.form['username'],
                                       content=request.form['content'])

        return jsonify({
                'status': insert.status,
                'message': insert.message,
                })
