def bubble(arr) :

    #iterates over each element in the array
    for i in range(len(arr)):
        
        # for comparing and swapping adjacent elements
        for j in range(0,len(arr)-i -1) :
            
            if arr[j] > arr[j+1] :

                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp


data = [1,8,92,10,3.5,6,8.8,2.0]
bubble(data)
print("Sorted array : ", data)
