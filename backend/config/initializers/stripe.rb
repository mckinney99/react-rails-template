Rails.configuration.stripe = {
  publishable_key: ENV["STRIPE_PUBLISHABLE_KEY"],
  secret_key: ENV["STRIPE_SECRET_KEY"]
}

puts "Publishable Key: #{Rails.configuration.stripe[:publishable_key]}"
puts "Secret Key: #{Rails.configuration.stripe[:secret_key]}"
Stripe.api_key = Rails.configuration.stripe[:secret_key]
