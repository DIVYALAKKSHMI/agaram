# fruits = ["mango", "apple", "orange"]
# fruits.append("pineapple")
# fruits.insert(1,"dragon")
# fruits[0] = "grapes"
# print(fruits)


# row1 = ["anish", "ajay", "sam"]
# row2 = ["kumari", "vinish", "karthick"]
# two_rows = row1 +row2
# print(two_rows)

# details = { "name" : "karka",
#             "place" : "putheri"}
# details["phone"] = "+91 7893489848"
# details["place"] = "krishnankoil" 
# details.update({"email" : "karka@gmail.com",
#                 "website" : "www.karka.com"})
# print(details) 

friends_list = [{"name" : "kumari",
                 "place" : "marungoor",
                 "hobbies" : ["drawing", "reading books"]},
                 {"name" : "asmitha",
                  "place": "parakkai",
                  "hobbies" : ["scrolling internet", "indoor games"]}]
friends_list.append({"name" : "renitha",
                     "place" : "marungoor",
                     "hobbies" : ["gardening","drawing"]})
# for friend in friends_list:
#    friend["hobbies"].append("coding")
#    print(friend)
#    for friend in friends_list:
#       for hobby in friend["hobbies"] :
#          if hobby == "drawing" :
#             friend.update({"eligible" : True})
#             break
#       else :
#          friend.update({"eligible" : False})
#    print(friends_list) 


for friend in friends_list :
   hobbies = friend["hobbies"]
   # position = 0
   for hobby in hobbies:
      if hobby == "drawing" :
         i = hobbies.index(hobby)
         hobbies[i] = "designing"
         # position += 1
print(friends_list)