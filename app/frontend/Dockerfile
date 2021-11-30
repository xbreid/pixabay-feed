FROM node:14.17.6-buster

WORKDIR /myapp/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /myapp/node_modules/.bin:$PATH

# Install JS manifests
COPY package.json yarn.lock /myapp/

# install dependencies
RUN yarn

# Add rest of the client code
COPY . /myapp/

EXPOSE 3000