json.extract! @guest, :name, :age, :favorite_color

json.gifts do
  json.array! @guest.gifts do |gift|
    json.extract! gift, :title, :description
  end
end  