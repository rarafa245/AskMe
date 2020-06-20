from app.model.tables import *
from collections import namedtuple
from typing import Dict
from flask_bcrypt import Bcrypt


def authenticate_login(rec_data: Dict) -> tuple:
    ''' Checking if the current user contains in database
        :parram - Dictionary with the received datas
        :return - boolean with the success/fail of the query (True/False)
    '''

    # Naming the returning tuple
    Authenticate = namedtuple('Authenticate', 'status user')

    client = User.query.filter_by(email=rec_data['email']).first()

    if client and Bcrypt().check_password_hash(client.password, rec_data['pass']):
        # If client is found and client password equal received password

        return Authenticate(status=True, user=client.username)

    return Authenticate(status=False,user=None)


def user_profile_pic(username: str) -> str:
    ''' Return current profile PIC
        :parram - username: PK string with the required username
        :return - string data with the current user image
    '''

    client = User.query.filter_by(username=username).first()

    if client:
        return client.image_file
    else:
         return None
