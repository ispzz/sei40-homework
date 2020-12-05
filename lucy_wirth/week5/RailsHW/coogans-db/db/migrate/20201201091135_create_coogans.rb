class CreateCoogans < ActiveRecord::Migration[5.2]
  def change
    create_table :coogans do |t|

      t.string :title        # title of production
      t.text   :image_url    # a longer text column for an image from the production if available.
      t.string :format      # a string for whether this is a Steve Coogan film, tv show or live comedy show
      t.string :year         # Year of production

    end
  end
end
