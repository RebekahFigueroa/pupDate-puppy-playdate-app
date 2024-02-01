# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_02_01_180740) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "owner_id", null: false
    t.bigint "playdate_id", null: false
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_id"], name: "index_comments_on_owner_id"
    t.index ["playdate_id"], name: "index_comments_on_playdate_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.bigint "owner_id", null: false
    t.string "name"
    t.string "age"
    t.string "breed"
    t.string "gender"
    t.string "size"
    t.string "description"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_id"], name: "index_dogs_on_owner_id"
  end

  create_table "owners", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "city"
    t.string "zipcode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "playdates", force: :cascade do |t|
    t.bigint "owner_id", null: false
    t.string "location"
    t.string "time"
    t.datetime "date"
    t.string "size_limit"
    t.string "age_limit"
    t.integer "playdate_size_limit"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_id"], name: "index_playdates_on_owner_id"
  end

  create_table "rsvps", force: :cascade do |t|
    t.bigint "dog_id", null: false
    t.bigint "playdate_id", null: false
    t.string "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id", "playdate_id"], name: "index_rsvps_on_dog_id_and_playdate_id", unique: true
    t.index ["dog_id"], name: "index_rsvps_on_dog_id"
    t.index ["playdate_id"], name: "index_rsvps_on_playdate_id"
  end

  add_foreign_key "comments", "owners"
  add_foreign_key "comments", "playdates"
  add_foreign_key "dogs", "owners"
  add_foreign_key "playdates", "owners"
  add_foreign_key "rsvps", "dogs"
  add_foreign_key "rsvps", "playdates"
end
