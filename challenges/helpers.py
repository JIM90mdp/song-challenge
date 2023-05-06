import random
from .models import Instrument, Tempo, Genre, SubGenre, SongIdea


def generate_random_idea():
    percussion_pks = Instrument.objects.filter(can_do_percussion=True).values_list('pk', flat=True)
    bass_pks = Instrument.objects.filter(can_do_bass=True).values_list('pk', flat=True)
    harmony_pks = Instrument.objects.filter(can_do_harmony=True).values_list('pk', flat=True)
    melody_pks = Instrument.objects.filter(can_do_melody=True).values_list('pk', flat=True)
    solo_pks = Instrument.objects.filter(can_do_solo=True).values_list('pk', flat=True)
    tempo_pks = Tempo.objects.all().values_list('pk', flat=True)
    genre_pks = Genre.objects.all().values_list('pk', flat=True)

    song = SongIdea(
        percussion=Instrument.objects.get(pk=random.choice(percussion_pks)),
        bass=Instrument.objects.get(pk=random.choice(bass_pks)),
        harmony=Instrument.objects.get(pk=random.choice(harmony_pks)),
        melody=Instrument.objects.get(pk=random.choice(melody_pks)),
        solo=Instrument.objects.get(pk=random.choice(solo_pks)),
        tempo=Tempo.objects.get(pk=random.choice(tempo_pks)),
        genre=Genre.objects.get(pk=random.choice(genre_pks)),
    )
    song.save()
    return song
