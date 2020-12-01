class BooksController < ApplicationController
    
    # CREATE
    # 1. Blank form, no query
    def new 
        @book = Book.new # We are going to create a new entry in the database using the form input. 
    end

    # 2. Form submits, save form data to DB, redirect
    def create
    
        Book.create(
            title: params[:book][:title],
            author: params[:book][:author],
            description: params[:book][:description],
            image_url: params[:book][:image_url]
        )

        redirect_to books_path
    end


    # READ
    # 1. Index of books
    def index
        # AR query to get all books, save into instance variable
        @books = Book.all
    end # index

    # 2. Show book
    def show
        @book = Book.find params[:id]
    end

    # UPDATE
    # 1. Show pre-filled form
    def edit 
        @book = Book.find params[:id]
    end

    # 2. Form submits here, do the update after again finding the item first by ID and then redirect
    def update
        # 1. Query the DB to get the item we want to edit.
        #  We have the id to lookup form the url /books/:id i.e. it's in params[:id]
        book = Book.find params[:id]

        # 2. Call .update() on that object, passing in the new values from the form submit, in params[:book]
        book.update(
            title: params[:book][:title],
            author: params[:book][:author],
            description: params[:book][:description],
            image_url: params[:book][:image_url]
        )

        redirect_to book_path(book.id)
    end

    def destroy
        Book.destroy params[:id]

        redirect_to books_path
    end


end # BooksController