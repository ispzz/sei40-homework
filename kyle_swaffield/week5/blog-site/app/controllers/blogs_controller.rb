class BlogsController < ApplicationController

  #CREATE#################################
  def new
    @blog = Blog.new
  end
  def create
    Blog.create(
      title: params[:blog][:title],
      article: params[:blog][:article],
      author: params[:blog][:author],
      create_date: params[:blog][:create_date]
    )
    redirect_to blogs_path
  end
  #READ#################################
  def index
    @blogs = Blog.all
  end
  def show
    @blog = Blog.find params[:id]
  end
  #UPDATE#################################
  def edit
    @blog = Blog.find params[:id]
  end
  def update
    blog = Blog.find params[:id]
    blog.update(
      title: params[:blog][:title],
      article: params[:blog][:article],
      author: params[:blog][:author],
      create_date: params[:blog][:create_date]
    )
    redirect_to blog_path(blog.id)
  end
  #DELETE#################################
  def destroy
    Blog.destroy params[:id]
    redirect_to blogs_path
  end

end
