from .token_dec import token_require
from app.model import *
from flask import Blueprint, request, current_app, jsonify

refresh_bp = Blueprint('refresh', __name__)

@refresh_bp.route("/refresh", methods=["GET", "POST"])
@token_require
def refresh_jwt(user, new_token):
    ''' Route to refresh the token
        :parram - http request.headers: (Username / Token)
        :return - json with new token
    '''

    return jsonify({
        'token': new_token.decode('UTF-8'),
        'status': True,
    })
