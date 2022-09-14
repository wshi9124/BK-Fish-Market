class CreatePurchases < ActiveRecord::Migration[7.0]
  def change
    create_table :purchases do |t|
      t.integer :user_id
      t.string :location
      t.float :tax
      t.float :shipping
      t.string :payment_method

      t.timestamps
    end
  end
end
