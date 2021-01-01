class ApplicationController < ActionController::Base

before_action :fetch_user

  def fetch_user


   #Check if the user_id in the session hash is the # IDEA:
   # of a real user in our users table: if it is, get
   # object for that user and save it into @current_user which every controller can use: if its not a real ID, consider it invalid and delete the session (this will prevent weird errors when re-seeding our DB)
   if session[:user_id].present?
      @current_user = User.find_by id: session[:user_id]
    end


# If we did get nil from the above user lookup query, then delete the sessionj (because the user_id is invalid)

session[:user_id] = nil unless @current_user.present?

end #fetch_user


end
