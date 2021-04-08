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
