from rest_framework import serializers
from .models import StudentTable, TeacherTable


class StudentTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentTable
        fields = '__all__'


class TeacherTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherTable
        fields = '__all__'
