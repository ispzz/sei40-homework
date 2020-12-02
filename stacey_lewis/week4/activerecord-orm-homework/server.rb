require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDOUT)

class Item < ActiveRecord::Base
  belongs_to :member
end

class Member < ActiveRecord::Base
  has_many :items #must be plural!
end


def db_query(sql)
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  results = db.execute sql
  db.close
  results

end #end db.query



get '/' do
  erb :home
end


#----------ITEMS---------------------------


#create================================

# 1.
get  '/items/new' do

  erb :items_new
end
#
# 2.
#
post '/items' do
#
  Item.create(
    item_name: params[:item_name],
    item_cost: params[:item_cost],
    store_name: params[:store_name],
    link: params[:link],
    image_url: params[:image_url],
    recipient: params[:recipient],
    event: params[:event_date],
    member_id: params[:member_id]
  )

  redirect '/items'

end

#read================================

#1.
get '/items' do

  @items = Item.all

  erb :items_index

end

#2.
get '/items/:id' do

  @item = Item.find params[:id]
  erb :items_show

end


#update================================

# 1.
get '/items/:id/edit' do

  @item = Item.find params[:id]

  erb :items_edit

end

#2
post '/items/:id' do


  item = Item.find params[:id]
  item.update(
    item_name: params[:item_name],
    item_cost: params[:item_cost],
    store_name: params[:store_name],
    link: params[:link],
    image_url: params[:image_url],
    recipient: params[:recipient],
    event: params[:event],
    event_date: params[:event_date],
    member_id: params[:member_id]
  )

  redirect "/items/#{params[:id]}"

end



#delete================================

get '/items/:id/delete' do
  Item.destroy params[:id]
  redirect '/items' #back to index
end

#-------------members-------------------------

#create================================

# 1.
get  '/members/new' do

  erb :members_new
end
#
# 2.
#
post '/members' do
#
  Member.create(
    name: params[:name],
    competency_rating: params[:competency_rating],
    shopping_style: params[:shopping_style],
    phone_number: params[:phone_number]
  )

  redirect '/members'

end

#read================================

#1.
get '/members' do

  @members = Member.all


  erb :members_index

end

#2.
get '/members/:id' do


  @member = Member.find params[:id]
  erb :members_show

end


#update================================

# 1.
get '/members/:id/edit' do

  @member = Member.find params[:id]

  erb :members_edit

end

#2
post '/members/:id' do


  member = Member.find params[:id]
  member.update(
    name: params[:name],
    competency_rating: params[:competency_rating],
    shopping_style: params[:shopping_style],
    phone_number: params[:phone_number]
  )

  redirect "/members/#{params[:id]}"

end



#delete================================

get '/members/:id/delete' do
  Member.destroy params[:id]
  redirect '/members' #back to index
end



#create================================

#1.
#get  '/[first_link_name]/new' do

  #erb :new //
#end

#2.

# post '/[[first_link_name]]' do
#
#   [thing creating].create (
#     [database_name]: params[:[database_name]],
#     repeat for all...
#   )

  # redirect '[first_link_name]'

# end

#read================================

# 1.
#get '/[[first_link_name]]' do
#
#@db_table_name = Class_db_table_name.all


  # erb :index

# end

# 2.
#get '/[[first_link_name]]/:id' do
#

#@db_table_name = Class_db_table_name.find params[:id]
  # erb :show

# end


#update================================

# 1.
#get '/[first_link_name]/:id/edit' do

#@db_table_name = Class_db_table_name.find params[:id]

#erb :edit

#end

#2
#post '/[[first_link_name]]/:id' do
#

#db_table_name = Class_db_table_name.find params[:id]
#db_table_name.update(

#   [database_name]: params[:[database_name]],
#     repeat for all...

# )
  # redirect '/[first_link_name]/#{params[:id]}'

# end



#delete================================

#get '/[first_link_name]/:id/delete' do
  # db_query "DELETE FROM pets WHERE id = #{params[:id]}"
  #[Class_db_table_name].destroy params[:id]
  #redirect '/[first_link_name]' #back to index
#end
