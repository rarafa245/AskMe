from app.controller.token_dec import token_create
from app.model import *
from flask import Blueprint, request, current_app, jsonify

login_bp = Blueprint('login', __name__)

@login_bp.route("/login", methods=["GET", "POST"])
def login():
    ''' Check if the client is registered and return an Authentication Token
        :parram - http request.form: Loggin Data (Email/Password)
        :return - Json with token, status and username
    '''

    if request.method == 'POST':
        authenticate = authenticate_login(request.form)

        if authenticate.status:
            token = token_create(username=authenticate.user)

            return jsonify({
                    'token': token.decode('UTF-8'),
                    'status': authenticate.status,
                    'username': authenticate.user
                    })

        return {'status': authenticate.status}


@login_bp.route("/register", methods=["GET", "POST"])
def register():
    ''' Register the new client
        :parram - http request.form: Register Data (Username/Email/Password)
        :return - Json confirmation of the succes/failure of the process
    '''

    if request.method == 'POST':

        insert = insert_table_user(request.form['username'],
                                    request.form['email'],
                                    request.form['pass'])

        return jsonify({
                'status': insert.status,
                'message': insert.message
                })
