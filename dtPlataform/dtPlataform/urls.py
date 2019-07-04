"""dtPlataform URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include


from rest_framework import routers
from productCreator import views 


router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'attributes', views.AttributesViewSet)
router.register(r'questions', views.QuestionViewSet)
router.register(r'survey', views.ChoiceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]