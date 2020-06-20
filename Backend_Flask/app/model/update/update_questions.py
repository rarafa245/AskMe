from collections import namedtuple
from app import db
from app.model.tables import *
from app.model.querys import user_question_simple

def update_question(username: str, id_question: str,
                        title=None, content=None) -> tuple:
    ''' Updating a Selected Question
        :parram - username/id_question - Informations to find question
                  title/content - Columns to change
        :return - Tuple with information of success/fail
    '''

    # Creating a Return Tuple With Informations
    Opt = namedtuple('Update', 'status message')

    question = user_question_simple(username=username, id_question=id_question)

    if question:
        # Checking if find question and if need update

        if title: question.title = title
        if content: question.content = content

        try:
            db.session.commit()
        except:
            db.session.rollback()
            return Opt(status=False, message='Update Error!')

        return Opt(status=True, message='Question Successfully Updated')

    else:
        return Opt(status=False, message='Question Not Founded!')
