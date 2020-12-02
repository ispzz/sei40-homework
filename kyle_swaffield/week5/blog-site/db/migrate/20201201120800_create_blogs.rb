class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
      create_table :blogs do |t|
        t.string  :title
        t.text    :article
        t.string  :author
        t.string  :create_date
    end
  end
end
