#include <stdio.h>

int main(){
    
    int numbers[5] = {2,1,5,6,8};
    
    printf("Array elements :");
    for(int i=0;i<5;i++){
        printf("%d\n",numbers[i]);
    }

    numbers[2] = 6;
    printf("Modified array : ");
    for(int i=0; i<5; i++){
        printf("%d\n",numbers[i]);
    }
    
    return 0;
}
