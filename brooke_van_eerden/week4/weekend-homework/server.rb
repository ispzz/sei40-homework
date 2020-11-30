require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'date'

require 'active_record'
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)
ActiveRecord::Base.logger=Logger.new(STDOUT)

class Event < ActiveRecord::Base
  belongs_to :venue
end

class Venue < ActiveRecord::Base
  has_many :events
end
require 'pry'
binding.pry

get '/' do
  @venues = Venue.all
  erb :home
end



#C
get '/events/new' do
  erb :"events/new"
end

get '/venues/new' do
  erb :'venues/new'
end

post '/events' do
  Event.create(
    name: params[:name],
    contact_name: params[:contact_name],
    contact_email: params[:contact_email],
    description: params[:description],
    start_date: params[:start_date],
    end_date: params[:end_date],
    cast_count: params[:end_date],
    paid: params[:paid],
    venue_id: params[:id]
  )

  redirect '/events'

end

post '/venues' do
  Venue.create(
    name: params[:name],
    capacity: params[:capacity],
    description: params[:description],
    image_url: params[:image_url]
  )

  redirect '/venues'
end
#R
get '/events' do
  @events = Event.all
  erb :"events/index"
end

get '/venues' do
  @venues = Venue.all
  erb :"venues/index"
end

get '/events/:id' do
  @event = Event.find params[:id]
  # @start_date= @event params[:start_date]
  erb :"events/show"
end

get '/venues/:id' do
  @venue = Venue.find params[:id]
  erb :"venues/show"
end

#U

get '/events/:id/edit' do
  @event = Event.find params[:id]
  # @start_date= Event.find params[:start_date]
  erb :"events/edit"
end


get '/venues/:id/edit' do
  @venue = Venue.find params[:id]
  erb :"venues/edit"
end

post '/events/:id' do
  event = Event.find params[:id]
  event.update(
    name: params[:name],
    contact_name: params[:contact_name],
    contact_email: params[:contact_email],
    description: params[:description],
    start_date: params[:start_date],
    end_date: params[:end_date],
    cast_count: params[:end_date],
    paid:params[:paid],
    venue_id: params[:id]
  )
  redirect "/events/#{params[:id]}"
end

post '/venues/:id' do
  venue = Venue.find params[:id]
  venue.update(
  name: params[:name],
  capacity: params[:capacity],
  description: params[:description],
  image_url: params[:image_url]
  )
  redirect "/venues/#{params[:id]}"
end


#D

get '/events/:id/delete' do
  Event.destroy params[:id]
  redirect '/events'
end

get '/venues/:id/delete' do
  Venue.destroy params[:id]
  redirect '/venues'
end
