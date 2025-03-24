from flask import Flask, request
from routes.contacts import contacts
from utils.db import db  # Importa db correctamente

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@localhost/flask"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)  # <-- ESTA LÍNEA ES CLAVE

app.register_blueprint(contacts)
