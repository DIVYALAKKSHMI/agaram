#include <iostream>
using namespace std;

class A {
public :
    virtual void fun(){
        cout << "A";
    }
};

class B : public A{
public :
    virtual void fun1(){
        cout << "B";
    }
};

class C : public A{
public :
    virtual void fun(){
        cout << "C";
    }
};

int main(){

    A a;
    B b;
    C c;
    
    // a .fun();
    // b.fun1();
    
    A* ptr = new C();
    ptr -> fun();

    delete(ptr);
    ptr = NULL;
    
    // ptr = new C();
    // ptr -> fun();

    return 0;
}