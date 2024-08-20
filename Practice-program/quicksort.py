def merge(arr):
    if len(arr) <= 1:
        return(arr)
        
    pivot = arr[0]
    lower_arr = []
    greater_arr = []
    
    # print(arr[1:])
    
    for i in arr[1:]:
        if i > pivot :
            greater_arr.append(i)
            # print("gvalue",i)
        else : 
            lower_arr.append(i)
            # print("lvalue",i)
    
    return((lower_arr) + [pivot] + (greater_arr))

values = [89,0,21,42,78,1,35,66]
quick_merge = merge(values)
print("merged : ", quick_merge)

