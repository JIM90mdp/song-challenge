from django.urls import include, path
from rest_framework import routers
from .views import song_idea, SongIdeaViewSet

router = routers.DefaultRouter()
router.register(r'song-challenge', SongIdeaViewSet)

urlpatterns = [
    path("song-idea/", song_idea),
    path("song-idea/<str:pk>/", song_idea),
    path('api/', include(router.urls))
]
