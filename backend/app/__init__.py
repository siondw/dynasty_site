from flask import Flask
import os
from .database import db
from flask_cors import CORS  # Import CORS

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # Enable CORS
    CORS(app, resources={r"/api/*": {"origins": "*"}})  # You can specify more restrictive settings

    # Import and register blueprints
    from .routes.team_routes import teams_bp
    from .routes.player_routes import players_bp
    from .routes.pick_routes import drafts_bp

    app.register_blueprint(teams_bp, url_prefix='/api')
    app.register_blueprint(players_bp, url_prefix='/api')
    app.register_blueprint(drafts_bp, url_prefix='/api')

    return app
