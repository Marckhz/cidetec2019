
from .models import Productss
from .models import Attributess
from .models import Questions
from .models import Choices

from rest_framework import  serializers

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
	class Meta:
		model = Choices
		fields = '__all__'
