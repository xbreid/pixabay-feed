FROM ruby:2.7.4-buster

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash

# Install distro packages
RUN apt-get update && apt-get install -qq -y \
  apt-utils \
  build-essential \
  libpq-dev \
  libxml2-dev \
  libxslt1-dev \
  netcat \
  nodejs \
  postgresql-client \
  vim \
  && apt-get autoremove && apt-get clean

RUN gem install bundler:2.2.32

# Set up non-root user
RUN addgroup --system --gid 1000 pixabay_feed
RUN adduser --system --gid 1000 --uid 1000 --home /myapp/* pixabay_feed

USER pixabay_feed
WORKDIR /myapp

# Install Gemfiles
COPY --chown=pixabay_feed Gemfile* /myapp/

RUN bundle install

# Copy the current directory contents into the container at /myapp
COPY --chown=pixabay_feed . /myapp

# Ensure utility scripts are executable
RUN chmod +x /myapp/bin/*

EXPOSE 8000
