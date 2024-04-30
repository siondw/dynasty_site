from flask import Blueprint, jsonify, request
from app.services.team_service import get_team_by_id, get_all_teams

teams_bp = Blueprint('teams', __name__)

@teams_bp.route('/teams', methods=['GET'])
def get_teams():
    teams = get_all_teams()
    return jsonify([team.to_dict() for team in teams]), 200

@teams_bp.route('/teams/<int:team_id>', methods=['GET'])
def get_team(team_id):
    team = get_team_by_id(team_id)
    if team:
        return jsonify(team.to_dict()), 200
    else:
        return jsonify({"error": "Team not found"}), 404
