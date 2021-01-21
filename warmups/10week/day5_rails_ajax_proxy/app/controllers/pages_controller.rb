class PagesController < ApplicationController
  def home
  end

  def fetch

    headers['Access-Control-Allow-Origin'] = '*'

    url = params[:url]
    # this will get http://www.smh.com.au

    response = HTTParty.get url

    # render :text => response

    render :json => {data: response.body}

  end
end
