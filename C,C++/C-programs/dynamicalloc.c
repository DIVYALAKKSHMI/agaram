#include <stdio.h>
#include <stdlib.h>

int main() {
    int *dynamic;
    dynamic = malloc(4*sizeof(int));
    
    dynamic[0] = 20;
    printf("%d\n",dynamic[0]);
    
    return 0;
}
