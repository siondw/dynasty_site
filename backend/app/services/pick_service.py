from app.models.picks import DraftPick
from app.database import db

def get_draft_picks_by_team_id(team_id):
    return DraftPick.query.filter_by(current_owner_id=team_id).all()

def get_draft_picks_by_year(year):
    """
    Retrieve draft picks for a specific year, sorted by round and pick number.
    Parameters:
        year (int): The year of the draft.
    Returns:
        A list of draft pick objects for the specified year, sorted by round and pick number.
    """
    draft_picks = DraftPick.query.filter_by(year=year).order_by(DraftPick.round, DraftPick.pick_number).all()
    return draft_picks