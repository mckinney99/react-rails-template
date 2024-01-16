class Api::V1::SampleController < ApplicationController
  def hello_world
    render json: { hello: 'world' }
  end
end
