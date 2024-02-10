#include <iostream>
using namespace std;

class A{
public:

    static int k;

    int s = 1;

    int fun(){
        return s+k;
        // return ++k;
    }

    static int fun1(){
        A::k = 15;
        fun3();
        return A::k;
    }

    int fun2(){
        static int m = 4;
        // cout << "inside non-static function," << m++;
        return m++;
    }
    static void fun3(){
        cout << "a static function";
    }
};

int A :: k = 0;

int main(){

    A obj;
    cout << "value of k is," << A::k << endl;
    cout << "value of incremented k is," << obj.fun() << endl;
    cout << "value from a static fun()," << A::fun1() << endl; 
    cout << obj.fun2() << endl;
    cout << obj.fun2() << endl;
    cout << obj.fun2() << endl;

    return 0;
}