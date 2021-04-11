
from rest_framework import routers
from .api import StudentTableViewSet, TeacherTableViewSet
from .views import StudentData, StudentTables, TeacherTables
from django.urls import path, include
router = routers.DefaultRouter()
router.register('studenttable', StudentTableViewSet, 'student')
router.register('teachertable', TeacherTableViewSet, 'teacher')

urlpatterns = [
    path('sort', StudentData.as_view()),
    path('teachers', StudentTables.as_view()),
    path('teacher', TeacherTables.as_view())
]

urlpatterns += router.urls
