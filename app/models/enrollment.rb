# == Schema Information
#
# Table name: enrollments
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  course_id  :integer          not null
#  student_id :integer          not null
#
# Indexes
#
#  index_enrollments_on_course_id   (course_id)
#  index_enrollments_on_student_id  (student_id)
#

class Enrollment < ApplicationRecord
    validates :course_id, :student_id, presence: true
    belongs_to :course
    belongs_to :student,
      class_name: 'User'
end
