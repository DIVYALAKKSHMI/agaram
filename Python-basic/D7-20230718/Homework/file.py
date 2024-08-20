Name = input("Enter_Name :")
Gender = input("Enter_Gender :")
Age = int(input("Enter_Age :"))
if Age >= 60 and Gender == "male":
     print("Hi Mr.",Name,"you are a senior citizen") 
elif Age >= 60 and Gender != "male" :
     print("Hi Miss.",Name,"You are a senior citizen")
elif Age > 18 and Gender == "female" :
     print("Hi Miss.",Name,"You are an adult")
elif Age > 18 and Gender != "female" :
     print("Hi Mr.",Name,"You are an adult")
elif Age < 18 and Gender == "female" :
     print("Hi Miss.",Name,"You are a teenager")
else :
     print("Hi Mr.",Name,"You are a teenager")
