class Api::PixabayController < ApplicationController
  before_action :set_query_params
  before_action :set_client
  before_action :authorize_request

  # GET /photos
  def photos
    @res = @client.photos(**@params)
    results = Serializer.build do |json|
      json.data @res['hits']
    end
    render json: results, status: :ok
  end

  # GET /videos
  def videos
    @res = @client.videos(**@params)
    results = Serializer.build do |json|
      json.data @res['hits']
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

  def set_client
    @client = Pixabay.new
  end

  def set_query_params
    @params = { **query_params, safesearch: true }
  end
end