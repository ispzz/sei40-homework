## Recurring Letters

Create a function that takes in a sentence and outputs the letter that’s repeated most frequently.

```js
recurringLetter('The quick brown fox jumps over the lazy dog');
// => The recurring letter of "The quick brown fox jumps over the lazy dog" is o
```

Use simple sentences with regular spaces between each word (like in the sentence you are reading) but if you want you can account for other characters such as !@#$%^&*? etc..

*Hint:* You'll need to loop and count each of the letters.

**Bonus:** Create another function that capitalises that letter within the sentence. 

```js
capitaliseLetter('The quick brown fox jumps over the lazy dog', 'o');
// => the quick brOwn fOx jumps Over the lazy dOg
```