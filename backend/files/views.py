from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from drf_pdf.response import PDFFileResponse
from drf_pdf.renderer import PDFRenderer
from backend.settings.base import BASE_DIR
from rest_framework.response import Response
from .serializers import ResumeSerializer
from .models import Resume

import io
from django.http import FileResponse
from reportlab.pdfgen import canvas

import reportlab

class PDFHandler(APIView):

    renderer_classes = (PDFRenderer, )

    def get(self, request):
        

        resume = Resume.objects.get(id=1)
        serializer = ResumeSerializer(resume, many=False)
        pdf = serializer.data['resume_file']

        headers = {
            'Content-Disposition': 'attachement; filename=BaseResume.pdf',
            'Content-Length': len(pdf),
        }
        
        print(pdf)

        return Response(
            pdf,
            headers=headers,
            status=status.HTTP_200_OK
        )



