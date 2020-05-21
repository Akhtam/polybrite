# == Schema Information
#
# Table name: wishlists
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  course_id  :integer          not null
#  student_id :integer          not null
#
# Indexes
#
#  index_wishlists_on_course_id   (course_id)
#  index_wishlists_on_student_id  (student_id)
#

require 'test_helper'

class WishlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
