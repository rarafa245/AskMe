from app import db

class User(db.Model):
    ''' DB Class for the Client´s Users
        :parram - Extension : Declarative Base for Databases Classes (db.Model)
        :return - Elements From Database
    '''

    __tablename__ = 'user'

    # PKs, Fks
    username = db.Column(db.String(30), primary_key=True)

    # Relationship
    questions = db.relationship('Questions', backref="author", lazy=True)
    answares = db.relationship('Answares', backref="author", lazy=True)

    # Columns in Table
    email = db.Column(db.String(35), unique=True, nullable=False)
    image_file = db.Column(db.String(120), nullable=True,
                           default='./static/profiles_pic/d14c1bb69ea32399.png')
    password = db.Column(db.String(30), nullable=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"
