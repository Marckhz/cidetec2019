from views import email_survey_notification
from app import create_app


app = create_app(config_class)


def send_emails():
	with app.app_context():
		email_survey_notification()


if __name__ == '__main__':
	send_emails()