from django.shortcuts import render

from rest_framework import viewsets

from .serializers import ProductSerializer
from .serializers import AttributesSerializer


from .models import Products
from .models import Attributes

# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):

	queryset = Products.objects.all()
	serializer_class = ProductSerializer



class AttributesViewSet(viewsets.ModelViewSet):

	queryset = Attributes.objects.all()
	serializer_class = AttributesSerializer

