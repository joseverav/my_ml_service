FROM ubuntu:jammy

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository ppa:deadsnakes/ppa -y && \
    apt-get update && \
    apt-get install -y python3.8 python3.8-dev python3-pip python3.8-distutils

WORKDIR /app
COPY requirements.txt .
RUN rm -f /usr/bin/python && ln -s /usr/bin/python3.8 /usr/bin/python
RUN rm -f /usr/bin/python3 && ln -s /usr/bin/python3.8 /usr/bin/python3

RUN pip3 install -r requirements.txt
RUN pip3 install gunicorn==20.0.0

ADD ./backend /app/backend
ADD ./docker /app/docker
ADD ./research /app/research

RUN ls -al /app/docker/backend
RUN chmod +x /app/docker/backend/wsgi-entrypoint.sh

#RUN mkdir -p /app/backend/server/staticfiles
RUN mkdir -p /app/backend/server/static