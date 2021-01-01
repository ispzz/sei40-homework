class DashboardController < ApplicationController


  def app
  end

  def uptime
    @up = `uptime`


  response = {
    command: 'utpime',
    output: @up,
    random_numbers: [ 10, 23, 42 ]
  }

   # render json: response


# The same route & controller action can respond with either HTML or JSON data, depending on the request format. The browser specifies this format as a request header, but we can force it by adding '.html' or '.json' to 
   respond_to do |format|
     format.html
     format.json { render json: response }
   end

   end


  end
