build:
	# building docker images
	docker-compose -f docker-compose.yml build --no-cache

setup:
	# bootstrapping application + dependencies
	docker-compose -f docker-compose.yml run pixabay_feed bin/setup

start:
	# launching application
	docker-compose -f docker-compose.yml up

stop:
	# stopping docker containers
	docker-compose -f docker-compose.yml stop

shell:
	# launching app container to console
	docker exec -ti `docker ps | grep 'pixabay_feed' | awk '{print $$1}'` bash

frontend:
	# launching app container to console
	docker exec -ti `docker ps | grep 'pf_frontend' | awk '{print $$1}'` bash

test:
	# running tests
	docker-compose -f docker-compose.yml run -e RAILS_ENV=test -e COVERAGE=true pixabay_feed bash -c "bundle exec rails test"
