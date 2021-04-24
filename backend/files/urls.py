
from django.urls import path, include
from .views import PDFHandler
from django.views.decorators.cache import cache_page


urlpatterns = [
    path('api/v1/resume', PDFHandler.as_view(), name='resume')
]