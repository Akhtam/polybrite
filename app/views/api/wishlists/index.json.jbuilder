@wishlists.each do |wishlist|
    json.set! wishlist.id do 
        json.extract! wishlist, :course_id, :student_id
    end
end