#include <iostream>
using namespace std;

class myClass{
public :

    int data;
    myClass(int f) : data(f) {}
    void show(){
        cout << "The integer is : " << this->data << "\n";
        this->showMessage();
    }
    void showMessage(){
        cout << "Hello! from myClass";
    }
};

int main(){
    myClass c(21);
    c.show();
    
    return 0;
}
