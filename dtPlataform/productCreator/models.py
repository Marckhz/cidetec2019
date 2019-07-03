from django.db import models
from django.contrib.auth.models import User


# Create your models here.
#El user model esta directamente creado en los campos
#de la base datos, por eso simplemente es necesario acceder
#mediante el front-end



class Products(models.Model):

	product = models.TextField(max_length = 200)
	#owner_name = models.TextField(max_length = 200)
	def __str__(self):
		return self.product


class Attributes(models.Model):

	product_name = models.ForeignKey(Products,on_delete = models.CASCADE)
	attribute = models.TextField(max_length= 100)

	def __str__(self):
		return self.product_name



