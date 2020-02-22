class Api::EnrollmentsController < ApplicationController
    def index
        @enrollments = User.find(current_user.id).enrollments;
    end
    def create 
        new_enrollment = Enrollment.new(enrollment_params);
        new_enrollment.save
        @enrollments = User.find(current_user.id).enrollments;
        render :index
    end

    private 
    def enrollment_params
        params.require(:enrollment).permit(:course_id, :student_id)
    end
end
