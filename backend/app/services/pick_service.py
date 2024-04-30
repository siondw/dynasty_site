from app.models.picks import DraftPick
from app.database import db

def get_draft_picks_by_team_id(team_id):
    return DraftPick.query.filter_by(current_owner_id=team_id).all()
