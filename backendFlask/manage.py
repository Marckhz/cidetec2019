from app import create_app
from flask_script import Manager
from config import config
import urllib.parse


config_class = config['development']

app = create_app(config_class)

if __name__ == '__main__':
	manager = Manager(app)
	#manager.add_command("runserver")
	manager.run()