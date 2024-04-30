from flask import Blueprint, jsonify
from app.services.player_service import get_players_by_team_id, get_trade_block_players_by_team_id

players_bp = Blueprint('players', __name__)

@players_bp.route('/teams/<int:team_id>/players', methods=['GET'])
def get_players(team_id):
    players = get_players_by_team_id(team_id)
    return jsonify([player.to_dict() for player in players]), 200

@players_bp.route('/teams/<int:team_id>/trade_block', methods=['GET'])
def get_trade_block_players(team_id):
    players = get_trade_block_players_by_team_id(team_id)
    return jsonify([player.to_dict() for player in players]), 200
