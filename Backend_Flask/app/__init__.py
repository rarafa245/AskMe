from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///storage.db'
app.config['SECRTE_KEY'] = '1234'
db = SQLAlchemy(app)

from app.controller import ( home_bp,
                            login_bp,
                            refresh_bp,
                            questions_bp,
                            answers_bp)

app.register_blueprint(login_bp)
app.register_blueprint(home_bp)
app.register_blueprint(questions_bp)
app.register_blueprint(answers_bp)
app.register_blueprint(refresh_bp)
