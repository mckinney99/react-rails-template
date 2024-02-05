class ApplicationController < ActionController::API
  def current_user
    puts "X" * 100
    puts "X" * 100
    if request.headers['Authorization'].present?
      token = request.headers['Authorization'].split(' ').last
      decoded_token = Warden::JWTAuth::TokenDecoder.new.call(token)
      User.find(decoded_token['sub']) if decoded_token
      @current_user ||= User.find(decoded_token['sub']) if decoded_token
    else
      nil
    end
  end
end
