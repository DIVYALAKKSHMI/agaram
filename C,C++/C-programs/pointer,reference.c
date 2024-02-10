#include <stdio.h>

void fun(){
     int a;
     a = 5;
     printf("%d\n",a);
     fun1(&a);
    //  printf("%d\n",a);

}

void fun1(int* b){
    *b = *b + 10;
    printf("%d\n",*b);
}


int main() {
    
    int b = 10;
    int * a = &b;
    printf("%p\n",a);
    printf("%d\n",*a);
    printf("%p\n",&b);
    printf("%d\n",b);
    
    fun();
    
    return 0;
}


// void modifyValue(int* ptr) {
//     *ptr = *ptr + 5;
// }

// int main() {
//     int number = 10;

//     printf("Original value: %d\n", number);

//     modifyValue(&number);

//     printf("Modified value: %d\n", number);

//     return 0;
// }
