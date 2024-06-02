@reviews.each do |review|
    json.set! review.id do
        json.id review.id
        json.reviewer_id review.reviewer_id
        json.seller_id review.seller_id
        json.title review.title
        json.body review.body
        json.stars review.stars
    end
end