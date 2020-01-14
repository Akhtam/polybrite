class Api::CoursesController < ApplicationController
    def index

        @courses = Course.all
        render :index
    end

    def show
        @course = Course.find(params[:id])
    end

    def create 
        params[:course][:category_id] = Category.find_by(name: course_params[:category_id]).id
        params[:course][:topic_id] = Topic.find_by(name: course_params[:topic_id]).id
        params[:course][:creator_id] = current_user.id
        debugger
        @course = Course.create!(course_params)
        render :show
    end

    def update
        
    end
    private 
    def course_params
        params.require(:course).permit(
            :title,
            :description,
            :location,
            :photo,
            :requirements,
            :start_date,
            :end_date,
            :size,
            :about_creator,
            :category_id, 
            :topic_id,
            :creator_id
        )
    end
end
