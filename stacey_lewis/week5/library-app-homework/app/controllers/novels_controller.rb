class NovelsController < ApplicationController


#CREATE=========
  def new
    @novel = Novel.new
  end

  def create
    Novel.create novel_params
    redirect_to novels_path
  end

#READ ==========

  def index
    @novels = Novel.all
  end

  def show
    @novel = Novel.find params[:id]
  end

#UPDATE ============

  def edit
    @novel = Novel.find params[:id]
  end

  def update
    novel = Novel.find params[:id]
    novel.update novel_params
    redirect_to novel_path(novel.id)
  end

#DELETE==========

  def destroy
    Novel.destroy params[:id]
    redirect_to novels_path
  end

private

def novel_params
params.require(:novel).permit(:title,:year,:author,:description,:library_id)
end

end
