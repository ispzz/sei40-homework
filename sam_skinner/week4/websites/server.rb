require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDOUT)

class Website < ActiveRecord::Base
  belongs_to :frontend
  belongs_to :backend
end

class Frontend < ActiveRecord::Base
  has_many :websites
end

class Backend < ActiveRecord::Base
  has_many :websites
end


#ROOT ROUTE
get '/' do
  erb :home
end #GET /


##CRUD Routes for websites
##CREATE
get '/websites/new' do
  erb :new
end #GET /websites/new

post '/websites' do
  Website.create(
    name: params[:name],
    frontend_id: params[:frontend_id],
    backend_id: params[:backend_id],
    launched: params[:year_launched],
    hacked: params[:hacked],
    domain: params[:domain],
    owned_by: params[:owned_by],
    wiki: params[:wiki]
  )

  redirect '/websites'
end #POST /websites


##READ
get '/websites' do
  @websites = Website.all
  erb :index
end #GET /websites

get '/websites/:id' do
  @website = Website.find params[:id]
  erb :show
end #GET /websites/:id


##UPDATE
get '/websites/:id/edit' do
  @website = Website.find params[:id]
  erb :edit
end #GET /website/:id/edit

post '/websites/:id' do
  website = Website.find params[:id]
  website.update(
    name: params[:name],
    frontend_id: params[:frontend_id],
    backend_id: params[:backend_id],
    launched: params[:year_launched],
    hacked: params[:hacked],
    domain: params[:domain],
    owned_by: params[:owned_by],
    wiki: params[:wiki]
  )

  redirect "/websites/#{params[:id]}"
end #POST /websites/:id


##DELETE
get '/websites/:id/delete' do
  Website.destroy params[:id]

  redirect '/websites'
end #GET /websites/:id/delete



##CRUD routes for frontends
##CREATE
get '/frontends/new' do
  erb :'frontends/new'
end #GET /frontends/new

post '/frontends' do
  Frontend.create(
    name: params[:name],
    date_released: params[:date_released],
    logo: params[:logo]
  )

  redirect '/frontends'
end #POST /frontends

##READ
get '/frontends' do
  @frontends = Frontend.all
  erb :'frontends/index'
end # /frontends

get '/frontends/:id' do
  @frontend = Frontend.find params[:id]
  erb :'frontends/show'
end #GET /frontends/:id

##UPDATE
get '/frontends/:id/edit' do
  @frontend = Frontend.find params[:id]
  erb :'/frontends/edit'
end #GET /frontends/:id/edit

post '/frontends/:id' do
  frontend = Frontend.find params[:id]
  frontend.update(
    name: params[:name],
    date_released: params[:date_released],
    logo: params[:logo]
  )

  redirect "/frontends/#{params[:id]}"
end #POST /frontends

##DELETE
get '/frontends/:id/delete' do
  Frontend.destroy params[:id]

  redirect '/frontends'
end #GET /frontends/:id/delete


##CRUD routes for backends
##CREATE
get '/backends/new' do
  erb :'/backends/new'
end #GET /backends/new

post '/backends' do
  Backend.create(
    name: params[:name],
    date_released: params[:date_released],
    logo: params[:logo]
  )

  redirect '/backends'
end #POST /backends

##READ
get '/backends' do
  @backends = Backend.all
  erb :'/backends/index'
end #GET /backends

get '/backends/:id' do
  @backend = Backend.find params[:id]
  erb :'/backends/show'
end #GET /backends/:id

##UPDATE
get '/backends/:id/edit' do
  @backend = Backend.find params[:id]
  erb :'/backends/edit'
end #GET /backends/:id/edit

post '/backends/:id' do
  backend = Backend.find params[:id]
  backend.update(
    name: params[:name],
    date_released: params[:date_released],
    logo: params[:logo]
  )

  redirect "/backends/#{params[:id]}"
end #POST /backends

##DELETE
get '/backends/:id/delete' do
  Backend.destroy params[:id]

  redirect '/backends'
end #GET /backends/:id/delete
