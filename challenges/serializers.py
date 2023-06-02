from rest_framework import serializers
from .models import SongIdea, Instrument, Genre, Tempo


class SongIdeaCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongIdea
        fields = []


class SongIdeaSerializer(serializers.ModelSerializer):
    content = serializers.SerializerMethodField()

    class Meta:
        model = SongIdea
        fields = ["id", "percussion", "bass", "harmony", "melody", "solo", 
                  "tempo", "genre", "view_count", "like_count", "content"]

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
