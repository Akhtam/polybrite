class Api::EnrollmentsController < ApplicationController
    def create 
        byebug
        render json: 'success'
    end

    private 
    def enrollment_params
        params.require(:enrollment).permit(:course_id, :student_id)
    end
end
