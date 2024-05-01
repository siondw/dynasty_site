from flask import Blueprint, jsonify
from app.services.pick_service import get_draft_picks_by_team_id, get_draft_picks_by_year

drafts_bp = Blueprint('drafts', __name__)

@drafts_bp.route('/teams/<int:team_id>/draft_picks', methods=['GET'])
def get_draft_picks(team_id):
    """
    Retrieve all draft picks for a given team.
    Parameters:
        team_id (int): The ID of the team.
    Returns:
        A JSON response containing a list of draft picks for the team.
    """
    draft_picks = get_draft_picks_by_team_id(team_id)
    return jsonify([pick.to_dict() for pick in draft_picks]), 200

@drafts_bp.route('/draft_picks/<int:year>', methods=['GET'])
def get_draft_order(year):
    """
    Retrieve the draft order for a specific year, sorted by round and pick number.
    Parameters:
        year (int): The year of the draft.
    Returns:
        A JSON response containing an array of team IDs representing the draft order.
    """
    draft_order = get_draft_picks_by_year(year)
    return jsonify([pick.current_owner_id for pick in draft_order]), 200