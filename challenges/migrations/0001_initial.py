# Generated by Django 4.2 on 2023-04-22 17:23

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_on', models.DateTimeField(auto_now=True, verbose_name='updated on')),
                ('name', models.CharField(max_length=200)),
            ],
            options={
                'ordering': ['created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Instrument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_on', models.DateTimeField(auto_now=True, verbose_name='updated on')),
                ('name', models.CharField(max_length=200)),
                ('can_do_percussion', models.BooleanField(default=False)),
                ('can_do_bass', models.BooleanField(default=False)),
                ('can_do_harmony', models.BooleanField(default=False)),
                ('can_do_melody', models.BooleanField(default=False)),
                ('can_do_solo', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'ordering': ['created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Tempo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_on', models.DateTimeField(auto_now=True, verbose_name='updated on')),
                ('name', models.CharField(max_length=200)),
            ],
            options={
                'ordering': ['created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='SubGenre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_on', models.DateTimeField(auto_now=True, verbose_name='updated on')),
                ('name', models.CharField(max_length=200)),
                ('genre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='challenges.genre')),
            ],
            options={
                'ordering': ['created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='SongIdea',
            fields=[
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_on', models.DateTimeField(auto_now=True, verbose_name='updated on')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('slug', models.CharField(blank=True, max_length=30, null=True, unique=True)),
                ('view_count', models.PositiveIntegerField()),
                ('like_count', models.PositiveIntegerField()),
                ('bass', models.ForeignKey(limit_choices_to={'can_do_bass': True}, on_delete=django.db.models.deletion.CASCADE, related_name='bass_set', to='challenges.instrument')),
                ('genre', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='challenges.genre')),
                ('harmony', models.ForeignKey(limit_choices_to={'can_do_harmony': True}, on_delete=django.db.models.deletion.CASCADE, related_name='harmony_set', to='challenges.instrument')),
                ('melody', models.ForeignKey(limit_choices_to={'can_do_melody': True}, on_delete=django.db.models.deletion.CASCADE, related_name='melody_set', to='challenges.instrument')),
                ('percussion', models.ForeignKey(limit_choices_to={'can_do_percussion': True}, on_delete=django.db.models.deletion.CASCADE, related_name='percussion_set', to='challenges.instrument')),
                ('solo', models.ForeignKey(limit_choices_to={'can_do_solo': True}, on_delete=django.db.models.deletion.CASCADE, related_name='solo_set', to='challenges.instrument')),
                ('subgenre', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='challenges.subgenre')),
                ('tempo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='challenges.tempo')),
            ],
            options={
                'ordering': ['created_at'],
                'abstract': False,
            },
        ),
    ]
