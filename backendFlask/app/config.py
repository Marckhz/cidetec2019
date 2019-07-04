import os

class DevelopmentConfig(Config):

	DEBUG = True


config = {
	'development':DevelopmentConfig,
	'default':DevelopmentConfig
}