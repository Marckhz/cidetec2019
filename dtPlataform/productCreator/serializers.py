from .models import Products
from .models import Attributes
from rest_framework import  serializers

class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Products

		fields = ('id', 'product')



class AttributesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Attributes
		fields = '__all__'