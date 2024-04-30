from flask import Blueprint, jsonify
from app.services.pick_service import get_draft_picks_by_team_id

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
