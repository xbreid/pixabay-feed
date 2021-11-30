class Api::PixabayController < ApplicationController
  before_action :set_query_params
  before_action :authorize_request

  # GET /photos
  def photos
    client = Pixabay.new

    @res = client.photos(**@params, safesearch: true)
    results = Serializer.build do |json|
      json.res @res
    end
    render json: results, status: :ok
  end

  # GET /videos
  def videos
    client = Pixabay.new

    @res = client.videos(**@params, safesearch: true)
    results = Serializer.build do |json|
      json.res @res
    end
    render json: results, status: :ok
  end

  private

  def query_params
    params.permit(
      :q,
      :category,
      :page,
      :per_page,
    )
  end

  def set_query_params
    @params = { **query_params, safesearch: true }
  end
end