# Stage 1: Build the Rails backend
FROM ruby:3.2.2 AS backend-builder

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /app
COPY . .
COPY Gemfile /Gemfile
COPY Gemfile.lock /Gemfile.lock
RUN bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

# Expose port 3000 for the Rails server
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]


# Stage 2: Build the React frontend
FROM node AS frontend-builder

WORKDIR /app
COPY package.json .
COPY yarn.lock .

# install app dependencies
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn install

# add app
COPY . ./

# Set environment variable for development
ENV NODE_ENV development

# Expose port 4000 for the React server
EXPOSE 4000

# Start the React app
CMD ["yarn", "start"]
