from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import MagangSerializers
from .models import magang, user
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MagangSerializers, UserSerializers
from django.http import JsonResponse

class JobList(APIView):
    def get(self, request):
        items = magang.objects.all()
        serializer = MagangSerializers(items, many=True)
        return Response(serializer.data)

class MagangSerializers(serializers.ModelSerializer):
    class Meta:
        model = magang
        fields = '__all__'

class MagangViewSet(viewsets.ModelViewSet):
    serializer_class = MagangSerializers
    queryset = magang.objects.all()

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializers
    queryset = user.objects.all()

def magang_list(request):
    jobs = magang.objects.all()
    job_list = []
    for job in jobs:
        job_list.append({
            'judul': job.judul,
            'deskripsi': job.deskripsi,
            'deadline': job.deadline,
            'nama_id': job.nama_id.nama,
        })