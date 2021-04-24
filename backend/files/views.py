from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from drf_pdf.response import PDFFileResponse
from drf_pdf.renderer import PDFRenderer


class PDFHandler(APIView):

    renderer_classes = (PDFRenderer, )

    def get(self, request):
        return PDFFileResponse(
            file_path='/path/to/file.pdf',
            status=status.HTTP_200_OK
        )
