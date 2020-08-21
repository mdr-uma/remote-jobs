class CreateUsersJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :users_jobs do |t|
      t.belongs_to :user 
      t.belongs_to :job
      t.timestamps
    end
  end
end
