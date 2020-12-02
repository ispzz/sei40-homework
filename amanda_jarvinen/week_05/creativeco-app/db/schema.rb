# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_02_094655) do

  create_table "coders", force: :cascade do |t|
    t.text "name"
    t.text "nationality"
    t.text "portfolio_url"
    t.text "instagram_url"
    t.text "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "bio"
  end

  create_table "creations", force: :cascade do |t|
    t.text "title"
    t.string "medium"
    t.text "image_url"
    t.integer "coder_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
