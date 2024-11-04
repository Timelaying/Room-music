from django.urls import paths
from .views import main

urlpatterns = [
    path('',main)
]