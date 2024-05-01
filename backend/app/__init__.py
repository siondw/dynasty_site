from flask import Flask, send_from_directory
import os
from .database import db
from flask_cors import CORS  # Import CORS

def create_app():
    app = Flask(__name__, static_folder='../../frontend/build', static_url_path='')

    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # Enable CORS
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    # Import and register blueprints for API endpoints
    from .routes.team_routes import teams_bp
    from .routes.player_routes import players_bp
    from .routes.pick_routes import drafts_bp

    app.register_blueprint(teams_bp, url_prefix='/api')
    app.register_blueprint(players_bp, url_prefix='/api')
    app.register_blueprint(drafts_bp, url_prefix='/api')

    # Route for serving React application
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path and os.path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        return send_from_directory(app.static_folder, 'index.html')

    return app
