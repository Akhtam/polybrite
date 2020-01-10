# == Schema Information
#
# Table name: courses
#
#  id            :bigint           not null, primary key
#  about_creator :string           not null
#  description   :text             not null
#  end_date      :datetime         not null
#  is_popular    :boolean          default(FALSE)
#  location      :string           not null
#  requirements  :string           not null
#  size          :integer          not null
#  start_date    :datetime         not null
#  title         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  category_id   :integer          not null
#  creator_id    :integer          not null
#  topic_id      :integer          not null
#
# Indexes
#
#  index_courses_on_category_id  (category_id)
#  index_courses_on_creator_id   (creator_id)
#  index_courses_on_location     (location)
#  index_courses_on_title        (title)
#  index_courses_on_topic_id     (topic_id)
 # validates :email, :first_name, :last_name, :password_digest, presence: true
#

class Course < ApplicationRecord
    validates :about_creator, :description, :end_date, :location, :requirements,
        :size, :start_date, :title, :category_id, :creator_id, :topic_id, presence: true
    
end
