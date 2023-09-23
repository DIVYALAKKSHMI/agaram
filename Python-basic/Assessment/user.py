user_details = [{"name" : "guna",
                 "e_mail" : "guna82@gmail.com",
                 "password" : "gu8275",
                 "hobbies" : ["drawing","cricket"],
                 "friends_list" : ["ajin","akash","anu"]},
                {"name" : "abi",
                 "e_mail" : "abi2000@gmail.com",
                 "password" : "abi2020",
                 "hobbies" : ["gardening","painting"],
                 "friends_list" : ["ajay","abishek","vicky"]},
                {"name" : "sam",
                 "e_mail" : "samsam20@gmail.com",
                 "password" : "sam20sam",
                 "hobbies" : ["volley ball","cricket"],
                 "friends_list" : ["kani","ramesh","bercy"]},
                {"name" : "raj",
                 "e_mail" : "rajkd2@gmail.com",
                 "password" : "rajraj2",
                 "hobbies" : ["movies","kabbadi"],
                 "friends_list" : ["abisha","benish","raghu"]},
                {"name" : "raji",
                 "e_mail" : "raji20@gmail.com",
                 "password" : "rajiraji20@gmail.com",
                 "hobbies" : ["gardening","movies"],
                 "friends_list" : ["ajay","ravi","shalini"]}] 



get_email = input("Enter_email : ")
get_password = input("Enter_password : ")

def user(a,b) :

    for details in user_details :
        E_mail = details["e_mail"]
        Password = details["password"]
        if a == E_mail and b == Password :
            user_details.append({"loggedin" : "true"})
        else :
            user_details.append({"loggedin" : "false"})


    logged = details["loggedin"]
    Name = details["name"]
    Hobbies = details["hobbies"]
    frnds = details["friends_list"] 

    if logged == "true" :
         print(Name , E_mail)
         print("your hobbies are : " , Hobbies)
         print("your friends are : " , frnds)

    else : 
         print("login failed") 

user(get_email,get_password) 

print(user_details)  