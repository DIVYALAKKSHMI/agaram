# n = int(input("Enter number : "))

# if n%2 != 0 :
#     print(n ,"is odd so,Weird")
# elif n %2 == 0:                                                   ...if else
#     if n >= 2 and n <= 5 :
#         print(n,"is btwn 2 nd 5 so,not weird")
#     elif n>= 6 and n<= 20 :
#         print(n,"is btwn 6 and 20 so,weird")
#     elif n> 20 :
#         print(n,"is greater than 20 so,not weird")


# first_input = int(input("Enter_first_num : "))
# second_input = int(input("Enter_second_num : "))

# print("sum of the two numbers is ", first_input+second_input)                   ...arithmetic operators
# print("difference of the two numbers is ", first_input-second_input)
# print("product of the two numbers is ", first_input*second_input)

# first_input = int(input("Enter_first_num : "))
# second_input = int(input("Enter_second_num : "))
                                                                                    
# print("the result of integer division ", first_input//second_input)              ... // and /
# print("the result of float division ", first_input/second_input)

# a = int(input("Enter_num : "))

# for i in range(0,a) : 
#     print(i,"and the square of ",i, "is" ,i**2)                    ...>i and i square


# n = int(input("Enter_integer : "))

# for i in range(0,n) : 
#     print(i,i**2)

# input_year = int(input("Enter_year : "))


# def is_leap(year) : 
#     if year % 4 == 0 and year % 100 != 0:
#         return True
#     elif year % 400 == 0 and year % 100 == 0 :                     ...leap yr function
#         return True
#     else :
#         return False
#     # print(year)

# print(is_leap(input_year))


# a = input("Enter_name : ")

# def fruit_name(fname):
#     if fname == "apple" :
#         return "oh its an apple"
#     elif fname == "banana" :
#         return "monkey"
#     else : 
#         return "tell me a fruit name man"

# print(fruit_name(a))


# n = int(input("Enter_num : "))

# for i in range(1,n+1) :                                         print(),parameter,end=""
#     print(i,end="")


    # print("hello,",end="")
    # print("world")


# a = [2,3,6,6,5]

# b = a.remove(max(a))

# print(a)



# marks = []
# list1 = []

# for i in range(0,5) :
#     name = input("Enter_name : ")
#     score = float(input("Enter_mark : "))

#     # score.append(marks)
#     marks += [score]
#     list1.append([name,score])

#     print(list1)                                          ...nested list
#     print(marks)
    
    
#     secondmin = min(marks)
    

#     for a in range(len(list1)) :
#         for b in range(len(list1[a])):
#             if list1[a][b] == secondmin :
#                 print(list1[a][0])



# string = input("Enter_string : ")

# newstring = ""

# for letters in string :
#     print(letters)
#     if letters.isupper() == True :                    
#          newstring += letters.lower()
#     else :                                                     ...swapcase(upper,lower)
#         newstring += letters.upper()                         

# print("Here is your newstring : ",newstring)


# print(string.lower())       ...upper(),lower()



# s = "hello"
# s += "world"

# print(s)

# a = 1                                          ...concatenation in integer and string
# a += 1
# print(a)

# my_string = "1"
# my_string += "1"

# print(my_string)


# string = input("Enter_string : ")

# s = string.split(",")

# print(s)

# t = "-". join(s)                                   ...split(),join()
# print(t)



# Fname = input("Enter_firstname : ")
# Sname = input("Enter_secondname : ")

# print("Hello,"+ Fname +" "+ Sname + "!","you just delved into python")

# print("hello"+"world")
# print("hello","world")                     ...+ ,




# string = input("Enter_string : ")

# print(string[5])

# # string[5] = "i"
# li = list(string)
# print(li)

# li[5] = "i"                                         ...mutation
# print(li)

# newstring = "".join(li)
# print(newstring)


# string = input("Enter_string : ")


# print("contains alphanumeric characters",string.isalnum())
# print("contains alphabetical characters",string.isalpha())
# print("contains numeric characters",string.isdigit())
# print("contains uppercase characters",string.isupper())
# print("contains lowercase characters",string.islower())                       ...string validation


# name = input("Enter_name : ")
# print(name)

# a = name.split(' ')                                ...capitalizing both first letter of both first and last name
# print(a)
                                                                        
# c = (letters.capitalize() for letters in a )

# b = ' '.join(c)
# print(b)
    

# name = "DIVYA"
# c=  name.capitalize()                         ...capitalize
# print(c)

# name = "divya"

# a = (letters.upper() for letters in name )             ...for loop
# c = ' '.join(a)
# print(c)



# a = ['apple','banana']

# for words in a : print(words)

# list = [1,2,3,4]

# new_list = [item*2 for item in list] 

# new_list = [True if item%2 == 0 else False for item in list ]          ...simplified way of writing loop function

# print(new_list)

# one = [1,2,3]
# two = [2,3,4]

# multi = [x+y for x in one for y in two]

# print(multi)



# list = [250,2,55,162,88,92]

# sum = 0

# for num in list :
#     sum += num

# print(sum)


# for num in list :
#     if num > sum :
#         sum = num                           ...max and min of a list 

# print(sum)

# small = list[0]

# for num in list : 
#     if num < small :
#         small = num

# print(small)



