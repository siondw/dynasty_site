from ..database import db

class Team(db.Model):
    __tablename__ = 'teams'

    team_id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.String(255), nullable=False)
    faab_budget = db.Column(db.Integer)
    team_needs = db.Column(db.Text)
    team_strengths = db.Column(db.Text)
    placement = db.Column(db.Integer)

    # Relationship to players
    players = db.relationship('Player', backref='team', lazy=True)

    def to_dict(self):
        return {
            'team_id': self.team_id,
            'owner': self.owner,
            'faab_budget': self.faab_budget,
            'team_needs': self.team_needs,
            'team_strengths': self.team_strengths,
            'placement': self.placement
        }
