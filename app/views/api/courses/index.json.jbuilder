@courses.each do |course|
    json.set! course.id do 
        json.extract! course, :id, :title,:start_date, :location 
        json.photoUrl url_for(course.photo)
    end
end