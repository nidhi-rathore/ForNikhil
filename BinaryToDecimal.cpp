#include <iostream>
#include <cmath>
using namespace std;

void BinaryToDecimal()
{
    int n, power = 0, result = 0, binary;
    cout << "Enter binary number" << endl;
    cin >> n;
    binary = n;
    while (n > 0)
    {
        result += (n % 10) * pow(2, power);
        n /= 10;
        power++;
    }
    cout << "Binary (" << binary << ")"<< " to decimal is : " << result << endl;
}

void DecimalToBInary()
{
    int n, decimal, power = 0, result = 0;
    cout << "Enter a decimal number" << endl;
    cin >> n;
    decimal = n;
    while (n > 0)
    {
        result += (n % 2) * pow(10, power);
        n /= 2;
        power++;
    }
    cout << "Decimal (" << decimal << ")"<< "to Binary is : " << result << endl;
}

int main()
{
    int choice;
    do
    {
        cout << "Enter\n\t1 for Binary to Decimal conversion\n\t2 for Decimal to Binary conversion\n\t3 for exit\n";
        cin >> choice;

        switch (choice)
        {
        case 1:
            BinaryToDecimal();
            break;
        case 2:
            DecimalToBInary();
        default:
            break;
        }

    } while (choice != 3);
}
