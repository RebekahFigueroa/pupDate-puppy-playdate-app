class UpdateTimeToString < ActiveRecord::Migration[6.1]
  def change
      change_column :playdates, :time, :string
  end
end
