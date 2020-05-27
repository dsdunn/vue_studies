#!/bin/sh

cd client && npm install && cd ../server && npm install && docker-compose up
