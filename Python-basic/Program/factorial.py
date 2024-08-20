n = int(input("Enter number : "))

factorial = 1

if n < 0 :
    print("There is no factorial for negative integer")

elif n == 0 :
    print("Factorial of 0 is 1")

else :
    for i in range(1,n+1):
        factorial = factorial*i
    print("Factorial of",n,"is",factorial)