# JavaScript Bank

In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.

#### Bank

There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

#### Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

### Tips

Don't overthink this. Shorter code is probably the answer.

## Bonus

- Ensure that the accounts cannot have negative values.
- Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

## Additional

Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.

---

# Credit Card Validation

You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the same)
- The final digit must be even
- The sum of all the digits must be greater than 16

The following credit card numbers are valid:

- `9999-9999-8888-0000`
- `6666-6666-6666-1666`

The following credit card numbers are invalid:

- `a923-3211-9c01-1112` invalid characters
- `4444-4444-4444-4444` only one type of number
- `1111-1111-1111-1110` sum less than 16
- `6666-6666-6666-6661` odd final number

## Example
```
validateCreditCard('9999-9999-8888-0000'); // Returns: true
```

*Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

*Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is

```
{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
```

*Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
