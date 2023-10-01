from django.urls import path
from channels.routing import URLRouter ,ProtocolTypeRouter 
from channels.auth import AuthMiddlewareStack

from . import views

""" urlpatterns = [
    path('video_feed/', views.video_feed),
] """


urlpatterns = [
    path('stream/', views.stream_view),
    path('tasks/', views.tasks),
    path('upload_image/', views.upload_image),
    
]

