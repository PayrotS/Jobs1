from django.urls import path, include
from . import views
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import JobList
from .views import MagangViewSet, UserViewSet

router = routers.DefaultRouter()
router.register("magangs", MagangViewSet)
router.register("users", UserViewSet)


urlpatterns = [
    path('api/jobs/magangs/', views.magang_list, name='magang-list'),
    path("", include(router.urls)),
]