from rest_framework import serializers
from .models import SongIdea, Instrument, Genre, Tempo


class SongIdeaCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongIdea
        fields = []


class SongIdeaSerializer(serializers.ModelSerializer):
    content = serializers.SerializerMethodField()
    percussion_name = serializers.CharField(source="percussion.name", read_only=True)
    bass_name = serializers.CharField(source="bass.name", read_only=True)
    harmony_name = serializers.CharField(source="harmony.name", read_only=True)
    melody_name = serializers.CharField(source="melody.name", read_only=True)
    solo_name = serializers.CharField(source="solo.name", read_only=True)
    tempo_name = serializers.CharField(source="tempo.name", read_only=True)
    genre_name = serializers.CharField(source="genre.name", read_only=True)
    class Meta:
        model = SongIdea
        fields = ["id", "view_count", "like_count", "content", 
                  "percussion", "bass", "harmony", "melody", "solo", "tempo", "genre", 
                  "percussion_name", "bass_name", "harmony_name", 
                  "melody_name", "solo_name", "tempo_name", "genre_name", ]

    def get_content(self, obj):
        return str(obj)


class InstrumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Instrument
        fields = '__all__'


class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = '__all__'


class TempoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tempo
        fields = '__all__'
