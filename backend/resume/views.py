from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Resume
from .serializers import ResumeSerializer

class ResumeView(APIView):


    def get(self, request):

        # gets the last resume posted as it is the most up to date
        resume = Resume.objects.last()
        serializer = ResumeSerializer(resume, many=False)

        return Response(serializer.data, status=200)
