"""a = int(input("Enter_number"))
if not a%2 == 0 :
    print("Odd")
else :
    print("Even")


a = int(input("Enter_number"))
b = int(input("Enter_second_number"))
c = a%b
if c == 0 :
    print("Yes")
else :
    print("No")""" 

Value = int(input("Enter_year"))
if (Value % 400 == 0 and Value % 100 == 0) or (Value % 4 == 0 and Value % 100 != 0) :
    print("Leap_year")
else :
    print("Not a leap year")

