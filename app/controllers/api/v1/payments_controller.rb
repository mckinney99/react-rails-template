class Api::V1::PaymentsController < ApplicationController
    def create_payment_intent
        amount = params[:amount].to_i * 100
        currency = params[:currency] || 'usd'
    
      Stripe.api_key = Rails.configuration.stripe[:secret_key];
      payment_intent = Stripe::PaymentIntent.create(
        amount: amount,
        currency: currency,
      )
  
      render json: { client_secret: payment_intent.client_secret }
    rescue Stripe::StripeError => e
        render json: { error: e.message }, status: :unprocessable_entity
    end
  end