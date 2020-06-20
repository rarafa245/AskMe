from sqlalchemy.exc import IntegrityError
from collections import namedtuple
from app.model.tables import *
from app import db
from flask_bcrypt import Bcrypt


def insert_table_user(username: str, email: str, password: str) -> tuple:
    ''' Inserting data into table user
        :parram - username: Client Username
                - email: Client Email
                - password: Client Password
        :return - Tuple with informations (status: bool, message: str)
    '''

    # Creating a Return Tuple With Informations
    Opt = namedtuple('Insert', 'status message')

    data = User(username=username,
                email=email,
                password=Bcrypt()
                            .generate_password_hash(password)
                            .decode('utf-8')
                )

    try:
        db.session.add(data)
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return Opt(status=False, message='Username or Email Already Registered!')

    return Opt(status=True, message='New Account Successfully Registered!')


def insert_table_questions(username: str, title: str, content: str) -> tuple:
    ''' Inserting data into table questions
        :parram - username: Client Username Who Asked The Question
                - title: Question Title
                - content: Question Content
        :return - Tuple with informations (status: bool, message: str)
    '''

    # Creating a Return Tuple With Informations
    Opt = namedtuple('Insert', 'status message')

    data = Questions(username=username,
                    title=title,
                    content=content)

    try:
        db.session.add(data)
        db.session.commit()
    except:
        db.session.rollback()
        return Opt(status=False, message='Register Error!')

    return Opt(status=True, message='Question Successfully Registered')


def insert_table_answares(id_question: str, username: str, content: str) -> tuple:
    ''' Inserting data into table questions
        :parram - id_question: ID of the Related Question
                - username: Client Username Who is Answaring The Question
                - content: Answares Content
        :return - Tuple with informations (status: bool, message: str)
    '''

    # Creating a Return Tuple With Informations
    Opt = namedtuple('Insert', 'status message')

    data = Answares(id_question=id_question,
                    username=username,
                    content=content)
    try:
        db.session.add(data)
        db.session.commit()
    except:
        db.session.rollback()
        return Opt(status=False, message='Register Error!')

    return Opt(status=True, message='Answares Successfully Registered')
