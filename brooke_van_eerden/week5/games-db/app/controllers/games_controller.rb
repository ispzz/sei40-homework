class GamesController < ApplicationController

    def new
      @game = Game.new
    end

    def create

      Game.create(
        name: params[:game][:name],
        platform: params[:game][:platform],
        description: params[:game][:description],
        max_players: params[:game][:max_player],
        box_art: params[:game][:box_art]

      )

      redirect_to games_path
    end


    def index
      @games= Game.all
    end

    def show
      @game = Game.find params[:id]
    end

    def edit
    @game = Game.find params[:id]

    end

    def update
      game= Game.find params[:id]
      Game.update(
        name: params[:game][:name],
        platform: params[:game][:platform],
        description: params[:game][:description],
        max_players: params[:game][:max_player],
        box_art: params[:game][:box_art]

      )
      redirect_to game_path(game.id)
    end

    def destroy
      Game.destroy params[:id]

      redirect_to games_path
    end






end
