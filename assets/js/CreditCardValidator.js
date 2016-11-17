/* The Question
You're starting your own credit card business. 
You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
Here are the rules for a valid number:
Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:
9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:
a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is 
{ valid: true, number: 'a923-3211-9c01-1112' } 
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, 
and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

 */


// Credit Card Valiadtion Solution

function CreditCardValiadtion() {
    // Prompt for user credit card pin
    var CreditCard = prompt("Enter CreditCard I6-digits PIN.", "2222-4444-3333-8888");

    // check if the format is correct
    function CreditCardCorrect() {
        if ((CreditCard.slice(4, 5) == "-" && CreditCard.slice(9, 10) == "-" && CreditCard.slice(14, 15) == "-")) {
            return true;
        } else {
            alert("CreditCard format entered is Wrong!");
            exit;
        }
    }

    // function to Remove dash
    function DashRemoved() {
        if (CreditCardCorrect() == true) {
            // Remove the - and return back the undashed Credit Card pin
            var dashResult = (CreditCard.slice(0, 4) + CreditCard.slice(5, 9) + CreditCard.slice(10, 14) + CreditCard.slice(15, 19));
            // Declare a variable Result
            var Result = "";
            // Check if it contains other than number
            for (var i = 0; i < dashResult.length; i++) {
                if (isNaN(dashResult[i]) == false) {
                    Result += dashResult[i];
                } else {
                    alert("CreditCard 16-digits contains non number.");
                    exit;
                }
            }
            return Result;
        }
    }

    // Check if all four-formatted four digits are equal
    function CardDigitsType() {
        var FirstFour = parseInt(DashRemoved().slice(0, 4));
        var SecondFour = parseInt(DashRemoved().slice(4, 8));
        var ThirdFour = parseInt(DashRemoved().slice(8, 12));
        var ForthFour = parseInt(DashRemoved().slice(12, 16));
        // Check if all the the digits are of the same 
        if ((FirstFour === SecondFour) && (FirstFour === ThirdFour) &&
            (FirstFour === ForthFour) && (SecondFour === ThirdFour) &&
            (SecondFour === ForthFour) && (ThirdFour === ForthFour)) {
            alert("CreditCard can not contain same digits!");
            exit;
        } else {
            return true;
        }
    }
    // Check for the last digit number if it is even
    function CreditCardEven() {
        //var getLastFourDigits = DashRemoved().slice(12);

        if (CardDigitsType() == true && parseInt(DashRemoved().slice(15, 16)) % 2 == 0) {
            return true;
        } else {
            alert("CreditCard last Digit is inappropriate.");
            exit;
        }
    }

    // Check for the Summation of all digits
    function CardDigitSummation() {
        if (CreditCardEven() == true) {
            var SumCardDigits = 0;
            // Sum the digits together
            for (var i = 0; i < DashRemoved().length; i++) {
                SumCardDigits += parseInt(DashRemoved().slice(i, i + 1));
            };
            // Check if the Sum is less than 16
            if (SumCardDigits < 16) {
                alert("CreditCard PIN is invalid.");
                exit;
            } else {
                return true;
            }
        }
    }

    // If all conditions are met Welcome the user to ProJaro Bank
    if (CardDigitSummation() == true) {
        alert("Welcome to ProJaro Bank!!!");
    }
};
CreditCardValiadtion();