from django.db import models
import uuid


class BaseModel(models.Model):
    created_at = models.DateTimeField('created at', auto_now_add=True)
    updated_on = models.DateTimeField('updated on', auto_now=True)

    class Meta:
        abstract = True
        ordering = ['created_at']


class Instrument(BaseModel):
    name = models.CharField(max_length=200)
    # icon = models.ImageField()
    can_do_percussion = models.BooleanField(default=False)
    can_do_bass = models.BooleanField(default=False)
    can_do_harmony = models.BooleanField(default=False)
    can_do_melody = models.BooleanField(default=False)
    can_do_solo = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Tempo(BaseModel):
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name} bpm"

class Genre(BaseModel):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class SubGenre(BaseModel):
    name = models.CharField(max_length=200)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)


class SongIdea(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    percussion = models.ForeignKey(Instrument, limit_choices_to={"can_do_percussion": True}, on_delete=models.CASCADE, related_name="percussion_set")
    bass = models.ForeignKey(Instrument, limit_choices_to={"can_do_bass": True}, on_delete=models.CASCADE, related_name="bass_set")
    harmony = models.ForeignKey(Instrument, limit_choices_to={"can_do_harmony": True}, on_delete=models.CASCADE, related_name="harmony_set")
    melody = models.ForeignKey(Instrument, limit_choices_to={"can_do_melody": True}, on_delete=models.CASCADE, related_name="melody_set")
    solo = models.ForeignKey(Instrument, limit_choices_to={"can_do_solo": True}, on_delete=models.CASCADE, related_name="solo_set")
    tempo = models.ForeignKey(Tempo, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, null=True, blank=True, on_delete=models.CASCADE)
    subgenre = models.ForeignKey(SubGenre, null=True, blank=True, on_delete=models.CASCADE)

    slug = models.CharField(max_length=30, unique=True, null=True, blank=True)
    view_count = models.PositiveIntegerField(default=0)
    like_count = models.PositiveIntegerField(default=0)


    def __str__(self):
        return (f"Write a {self.genre} song with a {self.tempo} tempo. "
                f"Using {self.percussion} for percussion, {self.bass} for bass, "
                f"{self.harmony} for harmony, {self.melody} for melody "
                f"and include a {self.solo} solo.")