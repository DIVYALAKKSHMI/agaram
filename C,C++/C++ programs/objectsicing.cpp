#include <iostream>
using namespace std;

class A{
public :
    void fun(){
        cout << "A fun from classA";
    }
    void fun1(){
        cout << "Another fun from classA";
    }
};

class B : public A{
public :
    void fun2(){
        cout << "A fun from classB";
    }
};

int main() {

    // A* ptr = new A();
    // ptr -> fun();
    
    B* ptr1 = new B();
    ptr1 -> fun();
    
    A* ptr2 = new B();      
    ptr2 -> fun();
    
    
    return 0;
}