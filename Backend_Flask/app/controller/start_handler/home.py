from flask import send_file
from app.controller.token_dec import token_require
from flask import Blueprint, request, current_app, jsonify
from app.model import *

home_bp = Blueprint('home', __name__)

@home_bp.route("/profilepic", methods=["GET", "POST"])
@token_require
def profile_pic(user, new_token):
    ''' Return current profile picture
        :parram - request.headers: HTTP headers informations (user/token)
        :return - str with profile pic
    '''

    if request.method == 'GET':

        profile_pic = user_profile_pic(user)
        return send_file(profile_pic, mimetype='image/gif')
