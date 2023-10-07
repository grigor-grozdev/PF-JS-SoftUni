function passwordValidator(pass) {

    let isLength = checkLength(pass);
    let isDigitsAndLetters = checkLettersAndDigits(pass);
    let isDigitCount = checkDigitsCount(pass);

    if (isLength && isDigitCount && isDigitsAndLetters) {
        console.log(`Password is valid`);
    }

    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    }
    function checkLettersAndDigits(pass) {
        for (let i = 0; i < pass.length; i++) {
            let asciiChar = pass[i].charCodeAt(0);
            if (!((asciiChar >= 48 && asciiChar <= 57) || (asciiChar >= 65 && asciiChar <= 90) || (asciiChar >= 97 && asciiChar <= 122))) {
                console.log(`Password must consist only of letters and digits`);
                return false;
            }
        }
        return true;
    }
    function checkDigitsCount(pass) {
        let digitCount = 0
        for (let i = 0; i < pass.length; i++) {
            let asciiChar = pass[i].charCodeAt(0);
            if (asciiChar >= 48 && asciiChar <= 57) {
                digitCount++
            }
        }
        if (digitCount >= 2) {
            return true;
        } else {
            console.log(`Password must have at least 2 digits`);
            return false;
        }
    }
}

passwordValidator('MyPass123');
