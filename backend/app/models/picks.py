from ..database import db

class DraftPick(db.Model):
    __tablename__ = 'draft_picks'

    pick_id = db.Column(db.Integer, primary_key=True)
    year = db.Column(db.Integer, nullable=False)
    round = db.Column(db.Integer, nullable=False)
    pick_number = db.Column(db.Integer)
    current_owner_id = db.Column(db.Integer, db.ForeignKey('teams.team_id'))
    original_owner_id = db.Column(db.Integer, db.ForeignKey('teams.team_id'))

    def to_dict(self):
        return {
            'pick_id': self.pick_id,
            'year': self.year,
            'round': self.round,
            'pick_number': self.pick_number,
            'current_owner_id': self.current_owner_id,
            'original_owner_id': self.original_owner_id
        }
