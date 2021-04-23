from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import generics, status
from .models import StudentTable, TeacherTable
from .serializers import StudentTableSerializer, TeacherTableSerializer

# Create your views here.
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from .serializers import UserSerializer, UserSerializerWithToken
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentData(APIView):
    permission_classes = (permissions.AllowAny,)

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


class StudentEvaluation(APIView):
    def get(self, request, format=None):
        data1 = StudentTable.objects.all()
        print(data1)


class StudentTables(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = StudentTableSerializer
    lookup_url_kwarg = 'owner'

    def get(self, request, format=None):
        data1 = []
        owner = request.GET.get(self.lookup_url_kwarg)
        print(owner)
        data = StudentTable.objects.filter(owner=owner)
        for i in data:
            data1.append(StudentTableSerializer(i).data)

        print(list(data1))
        return Response(data1, status=status.HTTP_200_OK)


class TeacherTables(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = TeacherTableSerializer
    lookup_url_kwargs = 'owner'

    def get(self, request, format=None):
        owner = request.GET.get(self.lookup_url_kwargs)
        data = TeacherTable.objects.filter(owner=owner)
        data1 = []
        for i in data:
            data1.append(TeacherTableSerializer(i).data)
        return Response(data1, status=status.HTTP_200_OK)
