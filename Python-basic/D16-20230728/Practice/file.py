list =["GroupA", "GroupB", "GroupC"]

user = input("Enter_group : ") 

for li in list :
    if user == li :
        print(True)
        break
    else :
        print(False) 
        break


if user in list :
    print(True)
else : 
    print(False) 