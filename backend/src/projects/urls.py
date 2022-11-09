from django.urls import path, include

from .views.views import ProjectView

urlpatterns = [

    path('api/v1/project/', ProjectView.as_view(), name="project")


]