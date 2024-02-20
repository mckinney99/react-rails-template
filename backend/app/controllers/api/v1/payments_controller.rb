# app/controllers/api/v1/payments_controller.rb
class Api::V1::PaymentsController < ApplicationController
  def create_payment_intent
    amount = 1000 # in cents
    currency = 'usd'
    Stripe.api_key = Rails.configuration.stripe[:secret_key];
    payment_intent = Stripe::PaymentIntent.create(
      amount: amount,
      currency: currency
    )
  
    render json: { client_secret: payment_intent.client_secret }
  end
end
