items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
] 

# def categorization(list) :
#     result = {}
#     FRUITS = []
#     VEGETABLS = []
    
#     for item in list :
#         Name = item["name"]
#         catg = item["category"] 
#         if catg == "Fruits" :
#             FRUITS.append(Name)
#         elif catg == "Vegetables" :
#             VEGETABLS.append(Name)

#     # print(FRUITS)
#     # print(VEGETABLS)
#     result.update({"fruits" : FRUITS, "vegetables" : VEGETABLS})
#     # print(result)

#     both = []
#     both.append(result)
#     print(both)

# categorization(items_list) 


def groupitem(list) :

    temp = {}
    for item in list :
        
        name = item["name"]
        categ = item["category"]
        if categ in temp :
            temp[categ].append(name)
        else :
            temp[categ] = [name] 
    return temp

print(groupitem(items_list))


groupitem(items_list)

