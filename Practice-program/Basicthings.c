// #include <stdio.h>

// int main() {

//     // char str[] = {';','-','/','\0'};
//     // printf("%s",str);
    
//     // char *name = "ramesh";
//     // printf("%s",name);
    
//     // for(int i=1; i!=10 ; i += 2)
//     // printf("%d%s\n",i,”: Hello“);
        
//     // for(; ;);
    
//     return 0;
    
// }



#include <stdio.h> 

int main() 
{ 
	int num;
	printf("Enter the number : ");
    scanf("%d",&num);
    
    printf("num : %d\n",num);
    
		if (num < 2) { 
		    printf("Not a prime number");
		}else{
		   int isPrime = 1;   									// Iterate from 2 to N/2 
		    for(int i = 2; i <= num/2 ; i++){                   // If n is divisible by any number between 2 and n/2,
				// printf("one");                   			//  it is not prime 
		        if(num % i == 0){
				//    printf("two");
		           isPrime = 0;
		            break;
		        }
		    }
			 if(isPrime){
        		printf("Is a Prime");
    		}else{
        		printf("Not a Prime");
    		}
		}
   

	return 0; 
}

#include <stdio.h>

int main() {

    int x = 10;
    int y = 12;
    
    printf("x : %d\ny : %d\n",x,y);
    
    x = x + y;
    y = x - y;
    x = x - y;
    printf("x : %d\ny : %d",x,y);

    
    return 0;
}

		