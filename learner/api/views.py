from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import generics, status
from .models import StudentTable, TeacherTable
from .serializers import StudentTableSerializer, TeacherTableSerializer

# Create your views here.


class StudentData(APIView):
    def get(self, request, format=None):
        sort = TeacherTable.objects.all()
        fast = []
        slow = []
        med = []
        if(len(sort) > 0):
            for i in sort:
                if(i.ia1 < 10):
                    slow.append(i.student_roll)
                elif(i.ia1 < 15):
                    med.append(i.student_roll)
                else:
                    fast.append(i.student_roll)
        data = {'fast': fast, 'med': med, 'slow': slow}
        return JsonResponse(data, status=status.HTTP_200_OK)


class StudentTables(APIView):
    serializer_class = StudentTableSerializer
    lookup_url_kwarg = 'owner'

    def get(self, request, format=None):
        owner = request.GET.get(self.lookup_url_kwarg)
        print(owner)
        data = StudentTable.objects.filter(owner=owner)
        data1 = StudentTableSerializer(data[0]).data
        print(list(data))
        return Response(data1, status=status.HTTP_200_OK)


class TeacherTables(APIView):
    serializer_class = TeacherTableSerializer
    lookup_url_kwargs = 'owner'

    def get(self, request, format=None):
        owner = request.GET.get(self.lookup_url_kwargs)
        data = TeacherTable.objects.filter(owner=owner)
        data1 = TeacherTableSerializer(data[0]).data
        return Response(data1, status=status.HTTP_200_OK)
