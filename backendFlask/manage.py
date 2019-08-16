from app import create_app
from flask_script import Manager, Server
from config import config

from app.views import email_survey_notification

import time

import datetime



config_class = config['development']


#AGREGAR JOB

app = create_app(config_class)
def send_emails():	
	email_survey_notification()



if __name__ == '__main__':
	with app.app_context():
		if(time.strftime("%H:%M") == '17:06'):
			email_survey_notification()
	manager = Manager(app)
	#manager.add_command("createsuperuser", createsuperuser)
	manager.add_command("runserver", Server('192.168.1.79') )
	manager.run()
