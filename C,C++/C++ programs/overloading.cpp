#include <iostream>
using namespace std;

class A {
public :
    void fun(int a, int b){
        cout << a << "," << b << endl;
    }
    void fun(int c){
        cout << c << endl;
    }
};



int main(){
    A obj;
    
    obj.fun(6);
    obj.fun(4,5);
    
    return 0;
}