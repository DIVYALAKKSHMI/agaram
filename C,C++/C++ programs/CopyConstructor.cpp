#include <iostream>
using namespace std;

class A{
public :
    int x,y;
    A(int a , int b){
       x = a;
       y = b;
    }
    A(A& obj){
        x = obj.x;
        y = obj.y;
    }
    int getX(){return x;}
    int getY(){return y;}
};

int main() {

    A obj(1,2);
    A obj1 = obj;
    
    cout << "obj.x : " << obj.x << "\n";
    cout << "obj.y : " << obj.y << "\n";

    cout << obj.getX() << "\n";
    cout << obj.getY() << "\n";
    
    return 0;
}