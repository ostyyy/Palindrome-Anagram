'use strict';

// Check Palindrome #1

function isPalindrome(str) {
    const sep = '';
    str = str.toLowerCase().replace(/[,'"’.?!\s]/g, sep);

    const strReversed = str.split(sep).reverse().join(sep);

    if (str === strReversed) return true;

    return false;
}

console.log(isPalindrome('Mountains'));
console.log(isPalindrome('Did Hannah see bees? Hannah did.'));
console.log(isPalindrome(' Evil is a name of a foeman, as I live.'));
console.log(isPalindrome('Madam, in Eden, I’m Adam.'));
