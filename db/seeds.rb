# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

users_data = [
  { email: 'admin1@test.com', password: 'testPassword', role: 'admin' },
  { email: 'admin2@test.com', password: 'testPassword', role: 'admin' },
  { email: 'admin3@test.com', password: 'testPassword', role: 'admin' }
  { email: 'employee1@test.com', password: 'testPassword', role: 'admin' }
  { email: 'employee2@test.com', password: 'testPassword', role: 'admin' }
  { email: 'employee3@test.com', password: 'testPassword', role: 'admin' }
]

users_data.each do |user_data|
    User.find_or_create_by(email: user_data[:email]) do |user|
      user.update(user_data)
    end
end

messages_data = [
  { datetime: DateTime.now, sender_email: 'employee1@test.com', subject: 'Hello', body: 'This is the message body.' },
  { datetime: DateTime.now, sender_email: 'employee2@test.com', subject: 'Greetings', body: 'Another message here.' },
  { datetime: DateTime.now, sender_email: 'employee3@test.com', subject: 'Important Announcement', body: 'Please read this carefully.' }
]

messages_data.each do |message_data|
    Message.find_or_create_by(subject: message_data[:subject]) do |message|
      message.update(message_data)
    end
end