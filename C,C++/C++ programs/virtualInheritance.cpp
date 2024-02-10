#include <iostream>
using namespace std;


class A {
public :
    void fun2(){
        cout << "a fun from classA";
    }
};

class B :virtual public A{
public :
    void fun3(){
        cout << "a fun from classB";
    }
};

class C :virtual public A{
public :
    void fun(){
        cout << "a fun from classC";
    }
};

class D :public B,public C{
public :
    void fun1(){
        cout << "a fun from classD";
    }
};



int main() {
    
    D obj;
    obj.fun();

    return 0;
}