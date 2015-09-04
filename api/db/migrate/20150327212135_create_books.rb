class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string     :asin
      t.string     :title
      t.string     :author
      t.float      :price
      t.references :wishlist

      t.timestamps null: false
    end
  end
end