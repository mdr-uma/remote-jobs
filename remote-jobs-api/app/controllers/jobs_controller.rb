class JobsController < ApplicationController
    def index
        jobs = Job.all
        render json: jobs
    end

    def show
        job = Job.find_by(id: params[:id])
        render json: job
    end

    def create
        job = Job.new(url: params[:job][:url], company:params[:job][:company], date:params[:job][:date], position:params[:job][:position], description:params[:job][:description])
        if !job.save
            job = Job.find_by(url: params[:job][:url])
        end
        user = User.find(params[:job][:user_id])
        user_job = UsersJob.new(user_id: user.id, job_id: job.id)
        render json: user_job.save ? job : {errors: 'Job is already been saved'}
    end

    # def destroy
    #     job = Job.find_by(id: params[:id])
    #     job.delete(job_params)
    #     render json: job
    # end

    private

    def job_params
        params.require(:job).permit(:url, :company, :date, :position, :description, :user_id)
    end
end
