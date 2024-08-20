nterms = int(input("Enter number of nterms : "))

count = 0

# first two terms
n1 , n2 = 0,1

if nterms <= 0 :
    print("PLease enter a + integer or integer > 0")

# if there is only one term, return n1
elif nterms == 1 :
    print("Fibonacci sequence upto",nterms,":",n1)

else :
    while count < nterms :
        print(n1)
        nth = n1 + n2

        # update values
        n1 = n2
        n2 = nth

        count += 1

