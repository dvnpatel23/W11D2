json.array! (@guests.select{ |guest| guest.age.between?(40, 50)}) do |guest|  
  json.partial! 'api/guests/guest', guest: guest
end