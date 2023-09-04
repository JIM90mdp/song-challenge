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
    # song.save() do not save the song just yet
    return song


def get_idea_from_key(percussion_id, bass_id, harmony_id, melody_id, solo_id, tempo_id, genre_id):
    song = None
    try:
        song = SongIdea.objects.get(percussion=percussion, bass=bass, harmony=harmony,
                                    melody=melody, solo=solo, tempo=tempo, genre=genre)
    except Song.DoesNotExist:
        try:
            song = SongIdea(percussion_id=percussion, bass_id=bass, harmony_id=harmony,
                            melody_id=melody, solo_id=solo, tempo_id=tempo, genre_id=genre)
        except:
            pass
    return song
