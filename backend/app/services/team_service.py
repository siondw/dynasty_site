from app.models.teams import Team
from app.database import db

def get_team_by_id(team_id):
    return Team.query.get(team_id)

def get_all_teams():
    return Team.query.all()
