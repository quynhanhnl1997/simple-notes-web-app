FROM mongo:5.0.9-focal

COPY seed-data.js /docker-entrypoint-initdb.d/

USER root
EXPOSE 27017