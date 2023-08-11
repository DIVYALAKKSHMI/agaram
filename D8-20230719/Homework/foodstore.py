#User_foods = {"Milk" : "1.02",
#              "Popcorn" : "2.5",
#              "Bread" : "2.5"}

"""Food_1 = input("Enter_Food_1")
Food_2 = input("Enter_Food_2")
if Food_1 == "Bread" or Food_1 == "Popcorn" or Food_1 == "Milk" :
    if Food_2 == "Bread" or Food_2 == "Popcorn" or Food_2 == "Milk" :   
        print("food available")
else :
    print("Food not available")

if (Food_1 == "Milk" or Food_2 == "Milk") and (Food_1 == "Popcorn" or Food_2 == "Popcorn") :
    print("total=3.52")
elif (Food_1 == "Popcorn" or Food_2 == "Popcorn") and (Food_1 == "Bread" or Food_2 == "Bread") :
    print("total=5") 
elif (Food_1 == "Bread" or Food_2 == "Bread") and (Food_1 == "Milk" or Food_2 == "Milk") :
    print("total=3.52")"""


Food_1 = input("Enter_Food_1")
Food_2 = input("Enter_Food_2")
User_foods = {"Milk" : "1.02",
              "Popcorn" : "2.5",
              "Bread" : "2.5"}
if Food_1 == "Bread" or Food_2 == "Bread" and Food_1 == "Popcorn" or Food_2 == "Popcorn" :
    print("You have ordered Bread and Popcorn", User_foods["Bread"] + User_foods["Popcorn"])
elif Food_1 == "Milk" or Food_2 == "Milk" and Food_1 == "Popcorn" or Food_2 == "Popcorn" :
    print("You have ordered Milk and Popcorn", User_foods["Milk"] + User_foods["Popcorn"])
elif Food_1 == "Milk" or Food_2 == "Milk" and Food_1 == "Bread" or Food_2 == "Bread" :
    print("You have orderd Milk and Bread", User_foods["Milk"] + User_foods["Bread"])
else :
    print("Food not available") 
