@courses.each do |course|
    json.set! course.id do 
        json.extract! course, :id, :title,:start_date, :location 
    end
end