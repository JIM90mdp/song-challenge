#!/bin/sh

python ./manage.py migrate
python ./manage.py collectstatic
gunicorn --bind :8000 --workers 2 django_project.wsgi

