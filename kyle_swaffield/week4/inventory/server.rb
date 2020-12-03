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

# require 'pry'
# binding.pry

get '/' do
  @items = Item.all
  @categories = Category.all
  @uoms = Uom.all
  @locs = Location.all

  # puts "==============================="
  #  # p @categories[0].name
  # puts "==============================="
  erb :index
end

get '/settings' do

  erb :settings
end

# items
  # create
  get '/item/new' do
    erb :item_new
  end
  post '/item' do

    item = Item.create(
      name: params[:item_name],
      description: params[:item_description],
      image_url: params[:item_image_url],
      category_id: 1,
      supplier_id: 1,
      uom_id: 1
    )

    if Location.where(name: 'default') == false
      Location.create(
        name: "default",
        description: "default",
        quantity: 0,
        item_id: 1
      )
    end
    redirect "/item/#{item.id}"
  end
  # read
  get '/item/:id' do
    id = :id
    @item = Item.find params[:id]
    @category = Category.find_by id: @item.category_id
    @supplier = Supplier.find_by id: @item.supplier_id
    @uom = Uom.find_by id: @item.uom_id
    @locations = Location.where item_id: params[:id]
    # puts "==============================="
    #    p :id
    # puts "==============================="
    erb :item_show
  end
  # update
  get '/item/:id/edit' do
    @item = Item.find params[:id]
    @categories = Category.all
    @suppliers = Supplier.all
    @uoms = Uom.all
    @locations = Location.all
    erb :item_edit
  end
  post '/item/:id' do
    item = Item.find params[:id]
    item.update(
      name: params[:item_name],
      description: params[:item_description],
      image_url: params[:item_image_url],
      category_id: params[:item_category_id],
      supplier_id: params[:item_supplier_id],
      uom_id: params[:item_uom_id]
    )
    redirect "/item/#{params[:id]}"
  end
  # delete
  get '/item/:id/delete' do
    Item.destroy params[:id]
    redirect '/'
  end
# Categories
  # create
  get '/category/new' do
    erb :category_new
  end
  post '/category' do
    Category.create(
      name: params[:category_name],
      description: params[:category_description]
    )
    redirect '/categories'
  end
  # read
  get '/categories' do
    @categories = Category.all
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
    category.update(
      name: params[:category_name],
      description: params[:category_description]
    )
    redirect "/category/#{params[:id]}"
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
      name: params['location_name'],
      description: params['location_description'],
      quantity: 0,
      item_id: 1
    )
    redirect '/locations'
  end
  # read
  get '/locations' do
    @locations = Location.all
    erb :location_index
  end
  get '/location/:id' do
    @location = Location.find params[:id]
    erb :location_show
  end
  # update
  get '/location/:id/edit' do
    @location = Location.find params[:id]
    @item = Item.all
    erb :location_edit
  end
  post '/location/:id' do
    location = Location.find params[:id]
    location.update(
    name: params['location_name'],
    description: params['location_description'],
    quantity: params['location_quantity'],
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
      name: params['supplier_name'],
      description: params['supplier_description'],
      email: params['supplier_email'],
      phone: params['supplier_phone']
    )
    redirect '/suppliers'
  end
  # read
  get '/suppliers' do
    @suppliers = Supplier.all
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
    name: params['supplier_name'],
    description: params['supplier_description'],
    email: params['supplier_email'],
    phone: params['supplier_phone']
    )
    redirect "/supplier/#{params[:id]}"
  end
  # delete
  get '/supplier/:id/delete' do
    Supplier.destroy params[:id]
    redirect '/suppliers'
  end
# Uom
  # create
  get '/uom/new' do
    erb :uom_new
  end
  post '/uom' do
    Uom.create(
      name: params['uom_name'],
      description: params['uom_description']
    )
    redirect '/uoms'
  end
  # read
  get '/uoms' do
    @uoms = Uom.all
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
      name: params['uom_name'],
      description: params['uom_description']
    )
    redirect "/uom/#{params[:id]}"
  end
  # delete
  get '/uom/:id/delete' do
    Uom.destroy params[:id]
    redirect '/uoms'
  end
