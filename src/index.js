'use strict';

// Check Palindrome #1
function isPalindrome(str) {
    const sep = '';
    str = str.toLowerCase().replace(/[,'"’.?:!\s]/g, sep);

    const strReversed = str.split(sep).reverse().join(sep);

    if (str === strReversed) return true;

    return false;
}

console.log('----Check Palindrome #1----');

console.log(isPalindrome('Mountains'));
console.log(isPalindrome('Did Hannah see bees? Hannah did.'));
console.log(isPalindrome(' Evil is a name of a foeman, as I live.'));
console.log(isPalindrome('Madam, in Eden, I’m Adam.'));

// Check Palindrome #2
function checkPalindrome(str) {
    const sep = '';

    str = str.toLowerCase().replace(/[^a-z]/g, sep);

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
console.log('----Check Palindrome #2----');

console.log(checkPalindrome('Mr. Owl ate my metal worm.'));
console.log(checkPalindrome('No sir, away! A papaya war is on.'));
console.log(checkPalindrome('The Dolomites'));

// Check Anagram #1
function isAnagram(str1, str2) {
    const sep = '';
    str1 = str1.toLowerCase().replace(/[^a-z]/g, sep);
    str2 = str2.toLowerCase().replace(/[^a-z]/g, sep);

    if (str1.length !== str2.length) return false;

    str1 = str1.split(sep).sort().join(sep);
    str2 = str2.split(sep).sort().join(sep);

    if (str1 === str2) return true;
    return false;
}

console.log('----Check Anagram #1----');

console.log(isAnagram(' Evangelist  ', 'Evil’s Agent'));
console.log(
    isAnagram(
        'The Great New York Rapid Transit Tunnel',
        'Giant work in street, partly underneath',
    ),
);

console.log(isAnagram('dwarf', 'garden'));

// Check Anagram #2
function checkAnagram(str1, str2) {
    const sep = '';
    str1 = str1.toLowerCase().replace(/[^a-z]/g, sep);
    str2 = str2.toLowerCase().replace(/[^a-z]/g, sep);

    if (str1.length !== str2.length) return false;

    const lettersFreq = {};
    for (let i = 0; i < str1.length; i++) {
        lettersFreq[str1[i]] = (lettersFreq[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (lettersFreq[str2[i]] === undefined || lettersFreq[str2[i]] === 0)
            return false;

        lettersFreq[str2[i]]--;
    }
    return true;
}

console.log('----Check Anagram #2----');
console.log(checkAnagram('grass', 'goat'));
console.log(checkAnagram('The detectives', 'Detect thieves'));
console.log(checkAnagram('Heavy Rain? ', 'Hire a navy!'));
