json.extract! course, :id, :title, :description, :location, :requirements,
         :start_date, :end_date, :size, :about_creator, :creator_id
json.photoUrl url_for(course.photo)