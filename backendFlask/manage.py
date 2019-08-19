from app import create_app
from flask_script import Manager, Server
from config import config

from app.views import email_survey_notification

import time

import datetime



config_class = config['development']


#AGREGAR JOB

app = create_app(config_class)

if __name__ == '__main__':
	manager = Manager(app)
	#manager.add_command("createsuperuser", createsuperuser)
	manager.add_command("runserver", Server('192.168.15.7') )
	manager.run()
