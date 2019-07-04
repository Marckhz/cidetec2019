from django.db import models
from django.contrib.auth.models import User

from django.core.exceptions import ValidationError


# Create your models here.
#El user model esta directamente creado en los campos
#de la base datos, por eso simplemente es necesario acceder
#mediante el front-end



class Productss(models.Model):

	product = models.TextField(max_length = 200)

	def validate_unique(self, exclude=None):
		if Productss.objects.filter(product= self.product).exists():
			raise ValidationError("ya existe un evento asi")

	def save(self, *args, **kwargs):
		self.validate_unique()
		super(Productss, self).save(*args, **kwargs)

	def __str__(self):
		return self.product


class Attributess(models.Model):

	product_name = models.ForeignKey(Productss, related_name='Productss', on_delete = models.CASCADE)
	attribute = models.TextField(max_length= 100)

	#def validate_unique(self, exclude = None):
	#	if Attributess.objects.filter(attribute = self.attribute).exists():
	#		raise ValidationError("Ya agregaste este atributo")

	#def save(self, *args, **kwargs):
	#	self.validate_unique()
	#	super(Attributess,self).save(*args, **kwargs)

	def __str__(self):
		return '{}{}'.format(self.product_name, self.attribute)


class Questions(models.Model):

	question_ref_id = models.OneToOneField(Attributess, related_name = 'question_ref_id', on_delete = models.CASCADE)
	product_ref_id = models.ForeignKey(Productss, related_name = 'product_ref_id', on_delete = models.CASCADE)
	question_text = models.CharField(max_length = 200)

	def validate_unique(self, exclude= None):
		if Questions.objects.filter(question_text= self.question_text).exists():
			raise ValidationError("Imposible Generar la misma pregunta")

	def save(self, *args, **kwargs):
		self.validate_unique()
		super(Questions, self).save(*args, **kwargs)

	def __str__(self):
		return '{}{}{}'.format(self.question_text, self.product_ref_id, self.question_ref_id)

class Choices(models.Model):

	i_like_it = '5'
	it_shouldbe_present = '4'
	im_neutral = '3'
	could_live_with_it = '2'
	dont_like_it = '1'

	KANO_MODEL_CHOICES = [

		(i_like_it, 'Me gusta'),
		(it_shouldbe_present, 'Deberia estar presente'),
		(im_neutral, 'Soy Neutral'),
		(could_live_with_it, 'Podria vivir con eso'),
		(dont_like_it, 'NO me gusta')
	]

	product_id = models.OneToOneField(Productss, related_name = 'product_id', on_delete = models.CASCADE)
	question_id = models.OneToOneField(Questions, related_name = 'question_id', on_delete = models.CASCADE)
	
	choice = models.CharField(max_length=2, choices = KANO_MODEL_CHOICES)

	def __str__(self):

		return '{}{}{}'.format(self.product_id, self.question_id, self.choice)
