function isLetter(charCode) {
    return (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123);
}

function caesarCipher(str, shift) {
    if (shift / 26 >= 1 || shift / 26 <= -1) shift %= 26;
    const NUMBER_OF_LETTERS_IN_ALPHABET = 26;
    let result = '';
    for (let i = 0; i < str.length; i++){
        const oldCharCode = str.charAt(i).charCodeAt(0);
        // Old char is not a letter, skip
        if (!isLetter(oldCharCode)) {
            result += String.fromCharCode(oldCharCode);
        } else {
            let newCharCode = oldCharCode + shift;
            // Shifted char is not a letter, wrap
            if (!isLetter(newCharCode)) {
                newCharCode -= NUMBER_OF_LETTERS_IN_ALPHABET;      
            }
            result += String.fromCharCode(newCharCode);
        }
    }
    return result;
}

module.exports = caesarCipher;
