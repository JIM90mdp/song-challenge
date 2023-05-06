from django.contrib import admin

from .models import Instrument, Genre, SubGenre, Tempo, SongIdea


class InstrumentAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'can_do_percussion', 'can_do_bass',
                    'can_do_harmony', 'can_do_melody', 'can_do_solo')


class SubGenreInline(admin.TabularInline):
    model = SubGenre


class GenreAdmin(admin.ModelAdmin):
    inlines = (SubGenreInline, )


class SongIdeaAdmin(admin.ModelAdmin):
    list_display = ('song_idea', 'view_count', 'like_count', 'created_at')
    list_filter = ('percussion', 'bass', 'harmony', 'melody', 'solo')
    readonly_fields = ('percussion', 'bass', 'harmony', 'melody', 'solo', 'tempo', 'genre', 'subgenre')

    def song_idea(self, obj):
        return str(obj)

admin.site.register(Instrument, InstrumentAdmin)
admin.site.register(Genre, GenreAdmin)
admin.site.register(SubGenre)
admin.site.register(Tempo)
admin.site.register(SongIdea, SongIdeaAdmin)

