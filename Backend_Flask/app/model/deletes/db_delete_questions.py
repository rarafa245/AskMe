from collections import namedtuple
from app import db
from app.model.tables import *

def delete_question_by_id(id_question: str) -> tuple:
    ''' Deleting question captured by ID
        :parram - id of the required question
        :return - tuple indicating the succes / failure of the process
    '''

    # Creating a Return Tuple With Informations
    Opt = namedtuple('Delete', 'status message')

    try:
        Questions.query.filter_by(id_question=id_question).delete()
        Answares.query.filter_by(id_question=id_question).delete()
        db.session.commit()
    except:
        db.session.rollback()
        return Opt(status=False, message='Delete Error!')

    return Opt(status=True, message='Question Successfully Deleted')
