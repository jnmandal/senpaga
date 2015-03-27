class CreateWishlists < ActiveRecord::Migration
  def change
    create_table :wishlists do |t|
      t.string     :name
      t.references :user

      t.timestamps null: false
    end
  end
end
