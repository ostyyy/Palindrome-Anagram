'use strict';

// Check Palindrome #1

function isPalindrome(str) {
    const sep = '';
    str = str.toLowerCase().replace(/[,'"’.?:!\s]/g, sep);

    const strReversed = str.split(sep).reverse().join(sep);

    if (str === strReversed) return true;

    return false;
}

console.log('----Check Palindrome #1----')
console.log(isPalindrome('Mountains'));
console.log(isPalindrome('Did Hannah see bees? Hannah did.'));
console.log(isPalindrome(' Evil is a name of a foeman, as I live.'));
console.log(isPalindrome('Madam, in Eden, I’m Adam.'));

// Check Palindrome #2

function checkPalindrome(str) {
    const sep = '';

    str = str.toLowerCase().replace(/[,'"’.?:!\s]/g, sep);

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log('----Check Palindrome #2----')
console.log(checkPalindrome('Mr. Owl ate my metal worm.'));
console.log(checkPalindrome('No sir, away! A papaya war is on.'));
console.log(checkPalindrome('The Dolomites'));