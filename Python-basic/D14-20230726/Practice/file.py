# def function_name() :
#     print("I am called")
# function_name() 

# first_name = "Divya" 
# last_name = "lakkshmi" 
# def name():
#     print(first_name + ' ' +last_name)
# name()

def combine_name(a,b) :
    print(a+' '+b)

combine_name("Karka","academy") 
combine_name("Ramesh","V")

# first_name = input("Enter_firstname")
# last_name = input("Enter_lastname")
# def combine_name(a,b) :
#     print(a+' '+b)
# combine_name(first_name, last_name)   

# gender = input("Enter_gender: " )

# def getcolor(a) :
#     if a == "male":
#         print("blue")
#     elif a == "female" :
#         print("pink")
#     else :
#         print("error")

# getcolor(gender) 

num1 = int(input("Enter_num1: "))
num2 = int(input("Enter_num2: "))

def even_odd(number) :
    if number%2 == 0 :
        print("even")
    else :
        print("odd")

def find_maxi(a,b) :
    if a > b :
        print(a, "is max")
        even_odd(a)
    elif b > a :
        print(b, "is max")
        even_odd(b)
    elif a == b :
        print("equal")

find_maxi(num1,num2) 

