// C++ program that demonstrate that
// we can have pointers and references
// of abstract class type.

// #include <iostream>
// using namespace std;

// class Base {
// public:
// 	// pure virtual function
// 	virtual void show() = 0;
// };

// class Derived : public Base {
// public:
// 	// implementation of the pure virtual function
// 	void show() { cout << "In Derived \n"; }
// };

// int main(void)
// {
// 	// creating a pointer of type
// 	// Base pointing to an object
// 	// of type Derived
// 	// Base* bp = new Derived();

//     Derived d;
//     d.show()

// 	// calling the show() function using the
// 	// pointer
// 	// bp->show();

// 	return 0;
// }

#include <iostream>
using namespace std;

class Base {
public:
	virtual void show() = 0;
	void fun(){
	    cout << "a fun from class Base";
	}
	
};

class Derived : public Base {
public:
	void show(){
	    cout << "a fun from class Derived";
	}
};

int main(void)
{
	Derived obj;
	obj.fun();
    obj.show();
	return 0;
}
