class Api::CoursesController < ApplicationController
    def index

        @courses = Course.where(is_popular: true)
        render :index
    end

    def show
        @course = Course.find(params[:id])
    end

    def create 
        @course = Course.create!(course_params)
        render :show
    end
    
    private 
    def course_params
        params.require(:course).permit(
            :title,
            :description,
            :location,
            :requirements,
            :start_date,
            :end_date,
            :size,
            :about_creator,
            :category_id, 
            :topic_id
        )
    end
end
