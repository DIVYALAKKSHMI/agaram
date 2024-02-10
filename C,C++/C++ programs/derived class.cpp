#include <iostream>
using namespace std;


class Animal {
public :
    int count;
    void fun(){
        cout << animal_name;
    }
private :
    string animal_name = "CAT";
protected :
    char short_term = 'C';
};


class cat : public Animal{
 public :
    void meow(){
        cout << "The cat is sleeping.\n";
        dis_name();
        
    }
private :
    void type(){
        cout << short_term << "\n";
    }
protected :
    void dis_name(){
         cout << "working" << "\n";
         type();
    
    }
};

class cow : public Animal{
 public :
    // void color(){
    //     cout << count ;
    //     cout << "Its a mix of black and white";
    // }
};

int main(){
    
    cat obj1;
    obj1.count = 2;
    cout << obj1.count << "\n";
    
    // cat obj2;
    obj1.meow();
    obj1.fun();
    
    // color();

    // cout << descri;
    
    
}