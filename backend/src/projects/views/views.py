from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework.views import APIView
from ..models import Project
from ..serializers import ProjectSerializer

class ProjectView(APIView):


    def get(self, request):
        print('calling')

        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)

        return Response(serializer.data, status=200)
