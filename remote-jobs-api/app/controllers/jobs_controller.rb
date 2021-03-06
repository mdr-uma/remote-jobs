class JobsController < ApplicationController
    def index
        if logged_in?
            jobs = current_user.jobs
            render json: jobs
        else
            render json: {error: "user not logged in"}
        end
    end

    def show
        job = Job.find_by(id: params[:id])
        render json: job
    end

    def create
        job = Job.new(job_params)
        if !job.save
            job = Job.find_by(url: params[:job][:url])
        end
        user = User.find(params[:job][:user_id])
        user_job = UsersJob.new(user_id: user.id, job_id: job.id)
        render json: user_job.save ? job : {errors: 'Job has been already saved'}
    end

    def destroy
        job = Job.find_by(id: params[:id])
        job.destroy
    end

    private

    def job_params
        params.require(:job).permit(:url, :company, :date, :position, :description)
    end
end
