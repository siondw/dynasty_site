from ..database import db

class Player(db.Model):
    __tablename__ = 'players'

    player_id = db.Column(db.Integer, primary_key=True)
    player_name = db.Column(db.String(255), nullable=False)
    position = db.Column(db.String(50))
    team_id = db.Column(db.Integer, db.ForeignKey('teams.team_id'))

    def to_dict(self):
        return {
            'player_id': self.player_id,
            'player_name': self.player_name,
            'position': self.position,
            'team_id': self.team_id
        }
