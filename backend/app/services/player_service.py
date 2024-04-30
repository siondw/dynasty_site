from app.models.players import Player
from app.database import db

def get_players_by_team_id(team_id):
    return Player.query.filter_by(team_id=team_id).all()

def get_trade_block_players_by_team_id(team_id):
    # Assuming you have a 'on_trade_block' boolean column in your Player model
    return Player.query.filter_by(team_id=team_id, on_trade_block=True).all()
