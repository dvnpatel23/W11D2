json.array! @parties do |party|
  json.extract! party, :name
  json.guests do 
    json.array! (party.guests.select{ |guest| guest.age.between?(40, 50)}) do |guest|
      json.extract! guest, :name, :age, :favorite_color
    end
  end
end