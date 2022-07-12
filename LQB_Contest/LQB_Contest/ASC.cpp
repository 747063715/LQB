#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    //Ë«Ö¸Õë
    int l = 0, r = s.length() - 1;
    while (l < r) {
        while (l < r && !isalnum(s[l])) l++;
        while (l < r && !isalnum(s[r])) r--;
        if (tolower(s[l++]) != tolower(s[r--])) return false;

    }
    return true;

}
int main()
{
    string s;
    cin >> s;
	cout << isPalindrome(s) << endl;
	return 0;
}

