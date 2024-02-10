#include <iostream>
using namespace std;

class A{
public :

 float num1;
 int num2;

A(float n, int m) : num1(n), num2(m) {}

template <typename C, typename D>
D fun3(C num1, D num2){
    return num1-num2;
}


template <typename T, typename U>
U fun2(T a, U b){
    return a+b;
}
};

int main(){

    A obj(2.2,5);

    // float result1 = obj.fun3();
    // cout << "value of fun3() is," << result1 << endl;

    float result = obj.fun2<float>(2,3.2);
    cout << "value of fun2() is," << result << endl;

    return 0;
}