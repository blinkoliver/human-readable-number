module.exports = toReadable = (number) => {
    let result,
        firstNumber,
        secondNumber,
        thirdNumber,
        firstWord,
        secondWord,
        thirdWord,
        fourthWord = "";
    const compare = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };
    switch (true) {
        case number % 100 === 0 && number !== 0:
            firstNumber = parseInt(number.toString().split("")[0]);
            firstWord = compare[parseInt(firstNumber)];
            result = `${firstWord} hundred`;
            return result;
        case number % 10 === 0 && number < 100:
            result = compare[number];
            return result;
        case (number % 100) % 10 === 0 && number !== 0:
            firstNumber = parseInt(number.toString().split("")[0]);
            secondNumber = parseInt(number.toString().split("")[1] * 10);
            firstWord = compare[parseInt(firstNumber)];
            thirdWord = compare[parseInt(secondNumber)];
            result = `${firstWord} hundred ${thirdWord}`;
            return result;
        case number >= 0 && number <= 20:
            result = compare[number];
            return result;
        case number > 20 && number < 100:
            firstNumber = parseInt(number.toString().split("")[0]) * 10;
            secondNumber = parseInt(number.toString().split("")[1]);
            firstWord = compare[parseInt(firstNumber)];
            secondWord = compare[parseInt(secondNumber)];
            result = `${firstWord} ${secondWord}`;
            return result;
        case number >= 100 && number < 1000:
            firstNumber = parseInt(number.toString().split("")[0]);
            secondNumber = parseInt(number.toString().split("")[1] * 10);
            thirdNumber = parseInt(number.toString().split("")[2]);
            let secondThird = parseInt(
                number.toString().split("")[1] + number.toString().split("")[2]
            );
            firstWord = compare[parseInt(firstNumber)];
            thirdWord = compare[parseInt(secondNumber)];
            fourthWord = compare[parseInt(thirdNumber)];
            if (secondNumber === 0) {
                result = `${firstWord} hundred ${fourthWord}`;
            } else if (secondNumber / 10 === 1) {
                result = `${firstWord} hundred ${compare[secondThird]}`;
            } else {
                result = `${firstWord} hundred ${thirdWord} ${fourthWord}`;
            }
            return result;
        default:
            break;
    }
};