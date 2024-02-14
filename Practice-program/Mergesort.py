def splitvalues(arr) :

    if len(arr) <= 1:
        return

    mid = len(arr) // 2
    print(mid)

    left_arr = arr[:mid]
    right_arr = arr[mid:]

    print(left_arr)
    print(right_arr)

    splitvalues(left_arr)
    splitvalues(right_arr)
    
    merge_sort(arr,left_arr,right_arr)

def merge_sort(arr,left_arr,right_arr):

    i = j = k = 0

    while i < len(left_arr) and j < len(right_arr) :
        if left_arr[i] <= right_arr[j] :
            arr[k] = left_arr[i] 
            i += 1
        else :
            arr[k] = right_arr[j]
            j += 1
        k += 1

    while i < len(left_arr) :
        arr[k] = left_arr[i]
        i += 1
        k +=1

    while j < len(right_arr) :
        arr[k] = right_arr[j]
        j += 1
        k += 1


values = [12,2,67,82,90,13,25,20]
splitvalues(values)
print("Sorted array : ",values)