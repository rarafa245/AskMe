import jwt
import time
import datetime
from app import app
from functools import wraps
from flask import current_app, jsonify, request

def token_require(f):
    ''' Decorator to check the token in every request from client
        :parram - Function to check
        :return - Function decorated
    '''

    # using wraps for the function to point to itself
    @wraps(f)
    def decorated(*args, **kwargs):
        ''' Checking the valid Token and refreshing it. If not valid, return
            Info and stopping client request
            :parram - http request.headers: (Username / Token)
            :return - Json with the corresponding information.
        '''

        # getting header parameters sent over http
        token = request.headers['Authorization']
        user = request.headers['UID']

        if not token:
            return jsonify({
                    'message': 'Token is missing',
                    'status': False
                    }), 403

        try:
            token_information = jwt.decode(token, '1234')

        except jwt.ExpiredSignatureError:
            return jsonify({
                    'message': 'Token is Expired!',
                    'status': False
                    }), 403
        except:
            return jsonify({
                    'message': 'Token is invalid',
                    'status': False
                    }), 403

        # If username in Token not equal to received username, return error
        if token_information['username'] != user:
            return jsonify({
                    'message': 'Token is invalid',
                    'status': False
                    }), 403

        new_token = token_refresh(username=token_information['username'],
                                    exp_time=token_information['exp'])

        return f(user, new_token, *args, **kwargs)
    return decorated


def token_refresh(username, exp_time):
    ''' Function to refresh the authentication sending another token
        :parram - None
        :return - new token
    '''

    refresh_time_minutes = 15

    if ( ( exp_time - time.time() ) / 60 ) < refresh_time_minutes :
        #If token refreshed in more than 15 minutes, new refresh

        return jwt.encode({
            'username': username,
            'exp': datetime.datetime.utcnow()
                    + datetime.timedelta(minutes=30)
        }, current_app.config['SECRTE_KEY'])

    else:
        return jwt.encode({
            'username': username,
            'exp': exp_time
        }, current_app.config['SECRTE_KEY'])


def token_create(username):
    ''' Function to create initial token when logging
        :parram - username: logged username
        :return - New Token
    '''

    return jwt.encode({
        'username': username,
        'exp': datetime.datetime.utcnow()
                + datetime.timedelta(minutes=30)
    }, current_app.config['SECRTE_KEY'])
