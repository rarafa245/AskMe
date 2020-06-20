import json
from app.model.tables import *
from collections import namedtuple
from typing import Tuple

def user_question(username: str, id_question: str) -> Tuple:
    ''' Fetch an especific user question in Database
        :parram - username: PK str with the required username
                - id_question: PK str with the id of the question
        :return - Query with the question infos
    '''

    # Naming the returning tuple
    Query = namedtuple('Query', 'status author data title content answers')

    question = ( Questions.query
        .filter_by(username=username, id_question=id_question)
        .first()
    )

    if question:

        #Getting and formating answers of the specific question
        answers_questions = {}
        for index, answers in enumerate(question.answares):

            answers_questions['A{}'.format(index)] = {
                "author": answers.username,
                "content": answers.content
            }

        return Query(status=True,
                        author=question.username,
                        data=question.date_posted,
                        title=question.title,
                        content=question.content,
                        answers=answers_questions
                    )
    else:
        return Query(status=False,
                        author=None,
                        data=None,
                        title='Error, Question Not Found!',
                        content=None,
                        answers=None
                    )


def user_all_questions(username: str, collection=10, page=1) -> Tuple:
    ''' Fetch user questions in Database and format the data
        :parram - username: PK str with current user
                  collection: number indicating the quantity of questions
                  page: pagination
        :return - Tuple with status of the fetch and data
    '''

    # Naming the returning tuple
    Query = namedtuple('Query', 'status data pages')

    #Pagination
    questions = ( Questions.query.filter_by(username=username)
        .order_by(Questions.date_posted.desc())
        .paginate(per_page=collection, page=page)
    )

    questions_data = {}
    if questions.items:
        #If found questions, insert them in the dictionary

        for question in questions.items:

            questions_data['Q{}'.format(question.id_question)] = {
                "id": question.id_question,
                "title":  question.title,
                "content": question.content
            }

        else:
            return Query(status=True,
                         data=json.dumps(questions_data),
                         pages=questions.pages)
    else:
        return Query(status=False,
                     data="You don't have any messages yet!",
                     pages="1")


def user_question_simple(username: str, id_question: str) -> Tuple:
    ''' Fetch an especific user question in Database
        :parram - username: PK str with the required username
                - id_question: PK str with the id of the question
        :return - Question Object
    '''

    # Naming the returning tuple
    Query = namedtuple('Query', 'status author data title content answers')

    question = ( Questions.query
        .filter_by(username=username, id_question=id_question)
        .first()
    )

    return question
