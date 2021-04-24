
from django.urls import path, include
from .views import PDFHandler
from django.views.decorators.cache import cache_page
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('resume', PDFHandler.as_view(), name='resume'),
] 