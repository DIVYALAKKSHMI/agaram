#include <stdio.h>
#include <string.h>


struct Person {
    char name[50];
    int age;
};

int main() {
    // struct Person person1;

    // struct Person person1 = {"Divya laksh",20};

    // strcpy(person1.name, "Divya Laksh");
    // person1.age = 20;

    // printf("Name: %s\n", person1.name);
    // printf("Age: %d\n", person1.age);

    struct str{
        int a ;
        char c[3];
        int nums[10];
    };

    // struct str z;
    struct str z = {10,{'a','b','c'},{1,2,3,4,5,6,7,8,9,10}};
    
    int length = sizeof(z.nums)/ sizeof(z.nums[0]);
    printf("Nums : ");
    for(int i=0;i<length;i++){
            printf("%d\n",z.nums[i]);
    }
    
    int lenofchar =  sizeof(z.c)/sizeof(z.c[0]);
    printf("Charcters : ");
    for(int j=0;j<lenofchar;j++){
        printf("%c\n",z.c[j]);
    }

    return 0;
}