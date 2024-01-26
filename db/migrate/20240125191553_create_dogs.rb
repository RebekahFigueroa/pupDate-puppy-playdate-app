class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.belongs_to :owner, null: false, foreign_key: true
      t.string :name
      t.string :age
      t.string :breed
      t.string :gender
      t.string :size
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
