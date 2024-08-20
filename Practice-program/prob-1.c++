#include <iostream>
#include <cstring>

const char s[] = "abca";

class Solution {

public : bool zoho(const char s[]) {

    int i = 0;
    
    int j = strlen(s) - 1;

    while (i <= j){
        if(s[i] == s[j]){
            i++;
            j--;
        }
        else return help(s, i + 1, j) || help(s,i,j-1);
        }
    return true;
}
    

public : bool help(const char s[], int i, int j){

    while(i<=j){
    
    if(s[i] == s[j]){
    
    i++;
    j--;
    
    }
    else return false;
}
    return true;

}

};
