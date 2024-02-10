#include <iostream>
using namespace std;

template <typename T>
class A{
public :
    T x;
    T y;

    A(T a , T b) : x(a),y(b) {}
    T add(){
        return x+y;
    }

};


int main(){

    A <int> obj(1,2);
    cout << obj.add() << endl;
    return 0;

}