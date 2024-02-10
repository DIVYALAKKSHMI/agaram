#include <iostream>
using namespace std;


class A{
public :
    int a;
    // int b;
    // int c;

    A(){
        a = 16;
        // b = 20;
    }
    A operator = (const A&obj){
        A obj1;
        obj1.a = obj.a;
        return obj1;
    }
};


int main(){
    
    A obj;
    A obj1;
    obj.a = 22;
    A obj2 = obj;
    cout << "value of obj1 :" << obj1.a<< "\n";

    
    cout << obj2.a<< "\n";
    cout << obj.a<< "\n";



    
 return 0;   
}