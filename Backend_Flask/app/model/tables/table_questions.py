from app import db
from datetime import datetime

class Questions(db.Model):
    ''' DB Class for the Questions
        :parram - Extension : Declarative Base for Databases Classes (db.Model)
        :return - Elements From Database
    '''

    __tablename__ = 'questions'

    # PKs, Fks
    id_question = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30),
                        db.ForeignKey('user.username'),
                        nullable=False)

    # Relationship
    answares = db.relationship('Answares', backref="question", lazy=True)

    # Columns in Table
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    content = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"Questions('{self.id_question}', '{self.title}', '{self.date_posted}', '{self.content}')"
