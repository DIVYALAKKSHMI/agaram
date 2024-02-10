#include <iostream>
using namespace std;

#include "prog.h"
#include "file.h"

using namespace prog;
using namespace file;

int main(){

    prog::A obj(1,2);

    cout << "value of fun() is," << obj.fun() << endl;
    cout << "value of a is," << obj.a << endl;

    // cout << "value," << prog::a << endl;              /error 


    // file::fun1(2.5,3.5);
    // float resultFun1 = file::fun1(2.5, 3.5);
    // cout << "value of fun1() is," << resultFun1 << endl;           /instead of these can use it in the below ways
    // cout << "value of b is," << file::b << endl;                   / using Directive

    cout << "value of fun1()," << fun1(2.5,3.5) << endl;
    cout << "value of a," << a << endl;
    cout << "value of b is," << b << endl;
  
    return 0;
}