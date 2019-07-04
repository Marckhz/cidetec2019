from django.shortcuts import render

from rest_framework import viewsets

from .serializers import ProductSerializer
from .serializers import AttributesSerializer
from .serializers import QuestionSerializer
from .serializers import ChoiceSerializer

from rest_framework import generics
from rest_framework.decorators import action


from .models import Productss
from .models import Attributess
from .models import Questions
from .models import Choices



class ProductViewSet(viewsets.ModelViewSet):

	queryset = Productss.objects.all()
	serializer_class = ProductSerializer

class AttributesViewSet(viewsets.ModelViewSet):

	queryset = Attributess.objects.all()
	serializer_class = AttributesSerializer

class QuestionViewSet(viewsets.ModelViewSet):

	queryset = Questions.objects.all()
	serializer_class = QuestionSerializer

class ChoiceViewSet(viewsets.ModelViewSet):

	queryset = Choices.objects.all()
	serializer_class = ChoiceSerializer

