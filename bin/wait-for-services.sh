#!/bin/sh

# Wait for PostgreSQL
until nc -z -v -w30 $DB_HOST 5432
do
  echo 'Waiting for PostgreSQL...'
  sleep 1
done
echo "PostgreSQL is up and running"

# Wait for Redis
until nc -z -v -w30 $REDIS_HOST 6379
do
  echo 'Waiting for Redis...'
  sleep 1
done
echo "Redis is up and running"