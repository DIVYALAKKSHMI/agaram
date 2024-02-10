#include <stdio.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person person1;

    struct Person person1 = {"Divya laksh",20};

    // strcpy(person1.name, "Divya Laksh");
    // person1.age = 20;

    printf("Name: %s\n", person1.name);
    printf("Age: %d\n", person1.age);

    return 0;
}