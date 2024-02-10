#include <iostream>
using namespace std;

class A{
public :
    int a;
    int b;
    int c;

    A(){
        a = 11;
        b = 20;
    }
    A operator+(const A&obj1){
        A obj2;
        obj2.c = obj1.a - obj1.b;
        return obj2;
    }
};


int main(){
    
    A obj;
    A obj1;
    A obj2 = obj + obj1;
    
    cout << obj2.c << "\n";
    
 return 0;   
}