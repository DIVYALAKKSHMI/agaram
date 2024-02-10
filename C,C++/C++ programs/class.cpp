#include <iostream>
using namespace std;



class Dog {
public :
    
  string name;
  int num;
  void fun(){
      
      cout << "Num of dogs:" << num << "\n";
      cout << "Woof Woof!" << "\n";
      cout << "It works!" << "\n";
      
    //   string check_pri = fun1();
    //   cout << check_pri << "\n";
         
      cout << b << "\n";
    //   cout << check_pro << "\n";
    
      fun2();
      
  }
  
 private :
 
   string mode;
   string fun1(){
       cout << "A function from private" << "\n";
       fun3();

   }
   
protected :
    char b = 'B';
    void fun2(){
        cout << "work aaguthu!" << "\n";
        string check_pri = fun1();
        cout << check_pri << "\n";

    }
    void fun3(){
        cout << "Third function working!";
    }
    
};

int main() {
    
    Dog obj;
    
    obj.name = "Golden retriever";
    obj.num = 12;
    
    cout << "Name of the dog breed is," << obj.name << "\n";
    // cout << "Num of dogs:" << obj.num << "\n";
    obj.fun();
    
    return 0;
}
