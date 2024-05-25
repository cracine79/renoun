class AddModelToInstrumentsAgain < ActiveRecord::Migration[7.0]
  def change
    add_column :instruments, :model, :string
  end
end
