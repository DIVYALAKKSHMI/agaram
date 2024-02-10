#include <iostream>
using namespace std;


class A{
public :
    void initialize(){
        num1 = 5;
        num2 = 5;
        add();
    }
private :
    int num1;
    int num2;
    
    int add(){
        cout << num1+num2;
        return num1 + num2;
    }
};


int main(){
    A obj;
    obj.initialize();

}

