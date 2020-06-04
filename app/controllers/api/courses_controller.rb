class Api::CoursesController < ApplicationController
    def index
        if params[:category] == 'All'
            @courses = Course.all
        elsif params[:category].to_i != 0
            @courses = [];
            if params[:ew] == 'enrollments'
                @enrollments = Enrollment.where(student_id: params[:category])
                @enrollments.each{|e| @courses << Course.find(e.course_id)}
            else
                @wishlist = Wishlist.where(student_id: params[:category])
                @wishlist.each{|e| @courses << Course.find(e.course_id)}
            end
        else
            @courses = Category.find_by(name: params[:category]).courses 
        end
        render :index
    end

    def show
        @course = Course.find(params[:id])
    end

    def create 
        params[:course][:category_id] = Category.find_by(name: course_params[:category_id]).id
        params[:course][:topic_id] = Topic.find_by(name: course_params[:topic_id]).id
        params[:course][:creator_id] = current_user.id
        @course = Course.create!(course_params)
        render :show
    end

    def update
        params[:course][:category_id] = Category.find_by(name: course_params[:category_id]).id
        params[:course][:topic_id] = Topic.find_by(name: course_params[:topic_id]).id
        @course = Course.find(params[:id])
        if @course.update_attributes!(course_params)
            render  :show
        else 
            render json: @post.errors.full_messages, status: 422
        end
       
    end


    def destroy
        @course = Course.find(params[:id])
        if @course.destroy
            render json: {message: 'success'}
        else
            render json: @course.erorrs.full_messages, status: 422
        end
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
