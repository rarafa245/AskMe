from app import db
from datetime import datetime

class Answares(db.Model):
    ''' DB Class for the Answares
        :parram - Extension : Declarative Base for Databases Classes (db.Model)
        :return - Elements From Database
    '''

    __tablename__ = 'answares'

    # PKs, Fks and Relations
    id_answare = db.Column(db.Integer, primary_key=True)
    id_question = db.Column(db.Integer,
                            db.ForeignKey('questions.id_question'),
                            nullable=False)
    username = db.Column(db.String(30),
                        db.ForeignKey('user.username'),
                        nullable=False)


    # Columns in Table
    content = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"Answares('{self.username}', '{self.content}')"
