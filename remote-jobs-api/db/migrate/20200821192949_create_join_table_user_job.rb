class CreateJoinTableUserJob < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :jobs do |t|
       t.index [:user_id, :job_id]
       t.index [:job_id, :user_id]
    end
  end
end
