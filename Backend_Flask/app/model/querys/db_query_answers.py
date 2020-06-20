from collections import namedtuple
from app.model.tables import *
from app import db

def query_answers_by_question(id_question):
    answers = Answares.query.filter_by(id_question=id_question).all()
    print(answers)
