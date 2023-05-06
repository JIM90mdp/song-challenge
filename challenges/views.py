from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse

from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from .helpers import generate_random_idea
from .models import SongIdea
from .serializers import SongIdeaSerializer, SongIdeaCreateSerializer


def song_idea(request, pk=None):
    if request.method == "POST":
        song = generate_random_idea()
        return redirect(reverse(song_idea, kwargs={"pk": str(song.id)}))
    song = ""
    if pk:
        song = get_object_or_404(SongIdea, pk=pk)
    return render(request, 'challenges/song-idea.html', {'song': song})


class SongIdeaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows SongIdeas to be listed and created
    """
    queryset = SongIdea.objects.all().order_by('-created_at')
    # permission_classes = [permissions.AllowAny]
    can_create = True

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action in ['list', 'retrieve', 'create']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

    def get_serializer_class(self):
        if self.action == "create":
            return SongIdeaCreateSerializer
        return SongIdeaSerializer


    def create(self, request, *args, **kwargs):
        instance = generate_random_idea()
        serializer = SongIdeaSerializer(instance)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
