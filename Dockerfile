FROM node:20-alpine as nextjs_app
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ./web-app/package*.json ./
# USER node
RUN npm ci
COPY --chown=node:node . .
COPY ./web-app /home/node/app
RUN npm run build


# Pull base image
FROM python:3.11-slim-buster as django_app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create and set work directory called `app`
RUN mkdir -p /code
WORKDIR /code

# Install dependencies
# COPY requirements.txt /tmp/requirements.txt
COPY poetry.lock pyproject.toml /code/

RUN set -ex && \
    pip install --upgrade pip && \
    pip install 'poetry==1.4.2' && \
    poetry config virtualenvs.create false && \
    poetry install --only main

# Copy local project
COPY . /code/
COPY --from=nextjs_app /home/node/app/out/* /code/static/
COPY --from=nextjs_app /home/node/app/out/index.html /code/templates/web-app
# Expose port 8000
EXPOSE 8000

# Use gunicorn on port 8000
CMD ["gunicorn", "--bind", ":8000", "--workers", "2", "django_project.wsgi"]