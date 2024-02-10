#include <stdio.h>

int main(){
    int a =5;
    float b = a;
    printf("%f\n",b);
    
    int c = 11;
    int e = 3;
    
    double d;
    d = c/e;
    printf("%f\n",d);
    
    char f[] = "340";
    int g = atoi(f);
    printf("%d\n",g);
    
    double n = 3.12457;
    int m = n;
    printf("%d\n",m);
    
    return 0;
}