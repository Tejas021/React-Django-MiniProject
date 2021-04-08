
from rest_framework import routers
from .api import StudentTableViewSet, TeacherTableViewSet
from .views import StudentData
from django.urls import path, include
router = routers.DefaultRouter()
router.register('studenttable', StudentTableViewSet, 'student')
router.register('teachertable', TeacherTableViewSet, 'teacher')

urlpatterns = [
    path('sort', StudentData.as_view())
]

urlpatterns += router.urls
