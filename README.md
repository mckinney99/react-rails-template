--- TODO ----

- Create redux api signup/sign-in and frontend flows in react
- Created an authenticated page and test being logged in/logged out
- Add stripe
- Add sidekiq? Want to run cron jobs to charge certain users monthly/yearly etc...
- 
- Add backend admin
- Add backend CMS?? If admins doesn't take care of it
- React Router
- 
- Add storybook to docker compose so it auto starts up when running `docker compose up`


- Add sign in sign up login features
- Add ability for only logged in users to see contact form results
- Deploy to AWS
- 


# README

Build and deploy docker image:

`docker compose up --build`

or if it's already built:
`docker compose up`

rails server will be on port 3000
React app is on port 4000


`docker exec -it rr-template-backend-1 bash`
to bash into a file

`docker ps` to get container name ^^




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
