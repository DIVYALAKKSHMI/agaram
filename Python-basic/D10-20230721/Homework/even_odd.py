Numbers = [1,2,3,4,5,6,7,8,9]
Even_count = 0
Odd_count = 0
for num in Numbers :
    if num%2 ==  0  :
        Even_count += 1
    else :
        Odd_count +=1
print("count of even numbers = ", Even_count)
print("count of odd numbers = ", Odd_count)
        
    
mixed_list = [1,2.0,"hai","@",5,6,"&",8,9]
Realnum_count = 0
for mix in mixed_list :
    if type(mix) == int :
        Realnum_count += 1

print("count of real numbers = ", Realnum_count)

list = [3,15,30,10,26,5,8]
for li in list :
    if li%3 == 0 and li%5 == 0:
        print("fizzbuzz")
    elif li%3 == 0 :
        print("fizz")
    elif li%5 == 0 :
        print("buzz")
    else :
        print("invalid")
        