from django.urls import path, include

from .views import ResumeView

urlpatterns = [

    path('api/v1/resume/', ResumeView.as_view(), name="resume")


]