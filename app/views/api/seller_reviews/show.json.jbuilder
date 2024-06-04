@reviews.each do |review|
    json.set! review.id do
        json.id review.id
        json.reviewer_id review.reviewer_id
        json.seller_id review.seller_id
        json.title review.title
        json.body review.body
        json.stars review.stars
        json.first_name review.first_name
        json.last_init review.last_init
        json.seller_average @average
        json.created_at review.created_at
          end
end