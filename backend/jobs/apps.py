from django.apps import AppConfig
from flask import Flask
from flask_cors import CORS  # Make sure you have this package installed

app = Flask(__name__)
CORS(app)  # Apply CORS middleware to the entire app
    
# ... other routes and server logic ...

if __name__ == "__main__":
    app.run(debug=True)



class JobsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "jobs"
