Current functionality.
- Currently, logging in and siging up work, but nothing changes once a user is signed in.
- Any visitor can create a 'message' using the contact form on the frontend. See how messages are being implemented to get an idea of how Redux and Rails are working together. We want to follow this pattern going forward when adding additional features.
- All endpoints should be working minus the current_user endpoint which I am actively working on to retrive the current logged in users data.


Possibilities of things to work on:
- Change the 'sign in' button in the navigation to say 'sign out' when a user is logged in.
- Add ability for only logged in users to see contact form results (currently there is a contact form on the homapage where anyone can submit a message, but nothing else is being done with it.) To access messages in the rails console, use ActiveRecord. Example: `Message.last`
- Create resricted pages in the frontend that only logged in users can see (/admin?)
- Create roles for users and restrict certain pages based on their role type
- Add jest and React Test Library tests
- Add stripe
- Add sidekiq in order to run cron jobs to charge certain users monthly/yearly etc...
- Add /admin CMS to be able to create articles and blog posts
- Add storybook to docker compose so it auto starts up when running `docker compose up`
- Deploy to AWS
- 


# README

Always make sure you are in the correct directory when making changed in the command line (ie git, rails commands, npm, etc.)

Build and deploy docker image:

`docker compose up --build`

or if it's already built:
`docker compose up`

rails server will be on port 3000
React app is on port 4000

To back into the rails console run:
`docker exec -it rr-template-backend-1 bash`
and use
`docker ps` to get container name ^^

Then once bashed in, run `bundle exec rails c`


## Frontend

Frontend uses Redux toolkit - https://redux-toolkit.js.org/tutorials/rtk-query


yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  yarn start

For authenticated pages, run a GET request before each call:
get '/current_user'
^^ this will return a 200 if the user is validated


## Backend
We can access user serializer data for single record by:

UserSerializer.new(resource).serializable_hash[:data][:attributes].to_json
And multiple records by,
UserSerializer.new(resource).serializable_hash[:data].map{|data| data[:attributes].to_json}


We use: https://github.com/jsonapi-serializer/jsonapi-serializer


If you get an activesupport error similar to `usr/local/bundle/gems/activesupport-7.1.2/lib/active_support/messages/codec.rb:57:in%20%60catch_and_raise':%20missing%20separator`

You just need to delete and re-create new credentials:

`cd backend`

`rm -rf config/credentials.yml.enc`

`  EDITOR="mate --wait" bin/rails credentials:edit`



## Other

* Ruby version: ruby 3.2.2 (2023-03-30 revision e51014f9c0) [arm64-darwin22]

* use `yarn install` for JS packages




* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
