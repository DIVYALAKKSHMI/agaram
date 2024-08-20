#include <stdio.h>

int main(){
    
    int numbers[] = {2,1,5,6,8,10,11,12,121,14};
    
    printf("Array elements :");
    int length = sizeof(numbers)/ sizeof(numbers[0]);
    for(int i=0;i<length;i++){
        printf("%d\n",numbers[i]);
    }
    
    numbers[2] = 52;
    printf("Modified array : ");
    for(int i=0; i<length; i++){
        printf("%d\n",numbers[i]);
    }

    return 0;
}




// int numbers[] = {2,1,5,6,8,10,12};
    
//     printf("Array elements :");
//     for(int i=0;i<sizeof(numbers);i++){
//         printf("%d\n",numbers[i]);
//     }

//     numbers[2] = 6;
//     printf("Modified array : ");
//     foint numbers[] = {2,1,5,6,8,10,11,12,121,14};
    
