require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter:'sqlite3',
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDOUT)

class Item < ActiveRecord::Base
  belongs_to :category
  belongs_to :supplier
  belongs_to :uom
  has_many :locations
end
class Category < ActiveRecord::Base
  has_many :items
end
class Location < ActiveRecord::Base
  belongs_to :item
end
class Supplier < ActiveRecord::Base
  has_many :items
end
class Uom < ActiveRecord::Base
  has_many :items
end

get '/' do
  erb :index
end

# items
  # create
  get '/items/new' do
    erb :item_new
  end
  post '/items' do
    Item.create(
      name: params[:name],
      description: params[:description],
      image_url: params[:image_url],
      category_id: params[:category_id],
      supplier_id: params[:supplier_id],
      uom_id: params[:uom_id]
    )
    redirect '/item'
  end
  # read
  get '/items/' do
    @items = Items.all
    erb :index
  end
  get '/item/:id' do
    @item = Item.find params[:id]
    erb :item_show
  end
  # update
  get '/item/:id/edit' do
    @item = Item.find params[:id]
    erb :item_edit
  end
  post '/item/:id' do
    item = Item.find params[:id]
    item.create(
      name: params[:name],
      description: params[:description],
      image_url: params[:image_url],
      category_id: params[:category_id],
      supplier_id: params[:supplier_id],
      uom_id: params[:uom_id]
    )
    redirect "/items/#{params[:id]}"
  end
  # delete
  get '/item/:id/delete' do
    Item.destroy params[:id]
    redirect '/items'
  end
# Categories
  # create
  get '/category/new' do
    erb :category_new
  end
  post '/category' do
    Category.create(
      name: params[:name],
      description: params[:description]
    )
    redirect '/categories'
  end
  # read
  get '/categories' do
    @categories = Categories.all
    erb :category_index
  end
  get '/category/:id' do
    @category = Category.find params[:id]
    erb :category_show
  end
  # update
  get '/category/:id/edit' do
    @category = Category.find params[:id]
    erb :category_edit
  end
  post '/category/:id' do
    category = Category.find params[:id]
    category.create(
      name: params[:name],
      description: params[:description]
    )
    redirect "/categories/#{params[:id]}"
  end
  # delete
  get '/category/:id/delete' do
    Category.destroy params[:id]
    redirect '/categories'
  end
# Location
  # create
  get '/location/new' do
    erb :location_new
  end
  post '/location' do
    Location.create(
      name: params['name'],
      description: params['description'],
      quantity: params['quantity'],
      item_id: params['item_id']
    )
    redirect '/locations'
  end
  # read
  get '/locations' do
    @locations = Locations.all
    erb :location_index
  end
  get '/location/:id' do
    @location = Location.find params[:id]
    erb :location_show
  end
  # update
  get '/location/:id/edit' do
    @location = Location.find params[:id]
    erb :location_edit
  end
  post '/location/:id' do
    location = Location.find params[:id]
    location.update(
    name: params['name'],
    description: params['description'],
    quantity: params['quantity'],
    item_id: params['item_id']
    )
    redirect "/location/#{params[:id]}"
  end
  # delete
  get '/location/:id/delete' do
    Location.destroy params[:id]
    redirect '/locations'
  end
# Supplier
  # create
  get '/supplier/new' do
    erb :supplier_new
  end
  post '/supplier' do
    Supplier.create(
      name: params['name'],
      description: params['description'],
      email: params['email'],
      phone: params['phone']
    )
    redirect '/supplier'
  end
  # read
  get '/suppliers' do
    @suppliers = Suppliers.all
    erb :supplier_index
  end
  get '/supplier/:id' do
    @supplier = Supplier.find params[:id]
    erb :supplier_show
  end
  # update
  get '/supplier/:id/edit' do
    @supplier = Supplier.find params[:id]
    erb :supplier_edit
  end
  post '/supplier/:id' do
    supplier = Supplier.find params[:id]
    supplier.update(
    name: params['name'],
    description: params['description'],
    email: params['email'],
    phone: params['phone']
    )
    redirect "/supplier/#{params[:id]}"
  end
  # delete
  get '/supplier/:id/delete' do
    Supplier.destroy params[:id]
    redirect '/supplier'
  end
# Uom
  # create
  get '/uom/new' do
    erb :uom_new
  end
  post '/uom' do
    Uom.create(
      name: params['name'],
      description: params['description']
    )
    redirect '/uom'
  end
  # read
  get '/uom' do
    @uom = Uom.all
    erb :uom_index
  end
  get '/uom/:id' do
    @uom = Uom.find params[:id]
    erb :uom_show
  end
  # update
  get '/uom/:id/edit' do
    @uom = Uom.find params[:id]
    erb :uom_edit
  end
  post '/uom/:id' do
    uom = Uom.find params[:id]
    uom.update(
      name: params['name'],
      description: params['description']
    )
    redirect "/uom/#{params[:id]}"
  end
  # delete
  get '/uom/:id/delete' do
    Uom.destroy params[:id]
    redirect '/uom'
  end
