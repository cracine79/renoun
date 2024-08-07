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

ActiveRecord::Schema[7.0].define(version: 2024_07_15_195732) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "carts", force: :cascade do |t|
    t.bigint "instrument_id", null: false
    t.bigint "buyer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyer_id"], name: "index_carts_on_buyer_id"
    t.index ["instrument_id", "buyer_id"], name: "index_carts_on_instrument_id_and_buyer_id", unique: true
    t.index ["instrument_id"], name: "index_carts_on_instrument_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "instrument_id", null: false
    t.bigint "favoriter_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["favoriter_id"], name: "index_favorites_on_favoriter_id"
    t.index ["instrument_id", "favoriter_id"], name: "index_favorites_on_instrument_id_and_favoriter_id", unique: true
    t.index ["instrument_id"], name: "index_favorites_on_instrument_id"
  end

  create_table "instrument_reviews", force: :cascade do |t|
    t.string "reviewer_name", default: "anonymous"
    t.string "title", null: false
    t.string "body", null: false
    t.string "instrument_name", null: false
    t.integer "stars", null: false
    t.integer "helpful_count", default: 0
    t.boolean "purchased_on_renoun", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "instruments", force: :cascade do |t|
    t.string "item_name", null: false
    t.string "condition", null: false
    t.float "price", null: false
    t.text "description", null: false
    t.string "brand", null: false
    t.string "category", null: false
    t.float "shipping"
    t.bigint "seller_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "model"
    t.boolean "available", default: true
    t.index ["seller_id"], name: "index_instruments_on_seller_id"
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "instrument_id", null: false
    t.bigint "buyer_id", null: false
    t.boolean "delivered"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyer_id"], name: "index_orders_on_buyer_id"
    t.index ["instrument_id"], name: "index_orders_on_instrument_id"
  end

  create_table "seller_reviews", force: :cascade do |t|
    t.bigint "reviewer_id", null: false
    t.bigint "seller_id", null: false
    t.string "title", null: false
    t.text "body", null: false
    t.integer "stars", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_init"
    t.index ["reviewer_id"], name: "index_seller_reviews_on_reviewer_id"
    t.index ["seller_id"], name: "index_seller_reviews_on_seller_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.float "star_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "carts", "instruments"
  add_foreign_key "carts", "users", column: "buyer_id"
  add_foreign_key "favorites", "instruments"
  add_foreign_key "favorites", "users", column: "favoriter_id"
  add_foreign_key "instruments", "users", column: "seller_id"
  add_foreign_key "orders", "instruments"
  add_foreign_key "orders", "users", column: "buyer_id"
  add_foreign_key "seller_reviews", "users", column: "reviewer_id"
  add_foreign_key "seller_reviews", "users", column: "seller_id"
end
