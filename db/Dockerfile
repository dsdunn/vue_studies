FROM mongo:latest

WORKDIR db

ENV MONGO_INITDB_DATABASE: studies
ENV MONGO_INITDB_ROOT_USERNAME: student
ENV MONGO_INITDB_ROOT_PASSWORD: password

COPY ./mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js:ro

EXPOSE 27017

