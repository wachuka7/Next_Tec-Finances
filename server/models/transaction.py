from app import db

class Transaction(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    amount=db.Column(db.Float, nullable=False)
    category= db.Column(db.String(50), nullable=False)
    description=db.Column(db.String(200), nullable=False)
    date=db.Column(db.DateTime, nullable=False)

