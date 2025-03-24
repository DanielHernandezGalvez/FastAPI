from utils.db import db


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    mark = db.Column(db.Integer(2))

    def __init__(self, name, mark):
        self.name = name
        self.mark = mark
