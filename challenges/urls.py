from django.urls import include, path
from rest_framework import routers
from .views import song_idea, SongIdeaViewSet, InstrumentsViewSet, GenresViewSet, TemposViewSet

router = routers.DefaultRouter()
router.register(r'song-challenge', SongIdeaViewSet)
router.register(r'instrument', InstrumentsViewSet)
router.register(r'genre', GenresViewSet)
router.register(r'tempo', TemposViewSet)

urlpatterns = [
    path("song-idea/", song_idea),
    path("song-idea/<str:pk>/", song_idea),
    path('api/', include(router.urls))
]
