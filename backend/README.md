To run rubocop, bash into a container and run:
`rubocop`

To autocorrect the errors:
`rubocop -a`


# Make quick DB additions

In `routes.rb`: `resources :messages, only: [:index, :show, :create, :update, :destroy]`

Generate model and controller:
```
rails generate model Message datetime:datetime sender_email:string subject:string body:text
rails generate controller Api::V1::Messages --skip-assets
```

Go to your new controller and define the methods.
- Make commands or service files if neccessary

Bash into the docker backend:
`docker exec -it rr-template-backend-1 bash` 
and run: `rails db:migrate`

While bashed, run: `rails c` and test it out.

Example:
`Message.create(body: "hello test test", sender_email: "eric@mail.com", subject: "test")`
Then find it: `Message.last`

Then test out the URL's in the browser:
`http://localhost:3000/api/v1/messages`
`http://localhost:3000/api/v1/messages/1` etc...


To access serializer data for single record by,

`UserSerializer.new(resource).serializable_hash[:data][:attributes].to_json`

And multiple records by,
`UserSerializer.new(resource).serializable_hash[:data].map{|data| data[:attributes].to_json}`

