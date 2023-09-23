"""Amount_of_item = int(input("Enter Amount_of_item"))
if Amount_of_item > 500 and Amount_of_item < 1000 :
    print("You have won a Silver token")
elif Amount_of_item > 1000 and Amount_of_item < 5000 :
    print("You have won a Gold token")
elif Amount_of_item >= 5000 :
    print("You have won a Platinum token")
elif Amount_of_item < 500 :
    print("No token")"""

Email = input("Enter_Email")
Password = input("Enter_password")

if Email == "divya2003@gmail.com" :
    print("Correct_email")
if Password == "itsmynewpassword" :
    print("Correct_password")
if Email == "divya2003@gmail.com" and Password == "itsmynewpassword" :
    print("You are logged in successfully")
elif Email == "divya2003@gmail.com" and Password != "itsmynewpassword" :
    print("Password is wrong")
elif Email != "divya2003@gmail.com" and Password != "itsmynewpassword" :
    print("You are not authenticated")




