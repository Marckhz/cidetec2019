from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

import bcrypt

from .models import Productss
from .models import Attributess
from .models import Questions
from .models import Choices

from rest_framework import  serializers


class UserSerializer(serializers.ModelSerializer):

	#password = serializers.CharField(style= {'input_type':'password'})
	class Meta:
		model = User
		fields = ('username', 'password', 'first_name', 'last_name', 'email')
		#extra_kwargs = {'password': {'write_only': True}}

	def create(self, validated_data):
		password = validated_data.pop('password', None)
		instance = self.Meta.model(**validated_data)
		if password is not None:
			instance.set_password(password)
		instance.save()
		return instance


class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Productss
		fields = '__all__'



class AttributesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Attributess
		fields = '__all__'



class QuestionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Questions
		fields = '__all__'


class ChoiceSerializer(serializers.ModelSerializer):
	


	#attribute_id = serializers.SlugRelatedField(queryset = Attributess.objects.all(), slug_field = 'attribute')
	product_id = serializers.SlugRelatedField(queryset = Productss.objects.all(), slug_field = 'product')
	question_id = serializers.SlugRelatedField(queryset= Questions.objects.all(), slug_field = 'question_text')

	class Meta:
		model = Choices
		fields = '__all__'

