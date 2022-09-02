class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.float :price
      t.string :weight
      t.text :description

      t.timestamps
    end
  end
end
