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
        job = Job.new(job_params)
        render json: job.save ? job : {errors: 'something went wrong.Try again'}
    end

    def destroy
        job = Job.find_by(id: params[:id])
        job.delete(job_params)
        render json: job
    end

    private

    def job_params
        params.require(:job).permit(:url, :title, :company_name, :job_type, :candidate_required_location, :salary, :description)
    end
end
