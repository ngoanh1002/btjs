/**
 * Xử lý số
 */

// Bài 1
function sphericalVolumn(r) {
    let total = 4 / 3 * Math.PI * Math.pow(r, 3);
    return total;
}

console.log('thể tích hình cầu là ' + sphericalVolumn(6));

// Bài 2
function totalBetween(n) {
    let {n1, n2} = n;
    let numberBetween = [];
    if (n1 < n2) {
        for (let number = n1 + 1; number < n2; number++ ) {
            numberBetween.push(number);
        }
    }

    if (n1 > n2) {
        for (let number = n2 + 1; number < n1; number++ ) {
            numberBetween.push(number);
        }
    }

    let result = numberBetween.reduce((a, v) => {
        return a + v;
    }, 0)
    console.log(result)
}

totalBetween({
    n1: 8,
    n2: 3
});

// Bài 3
function divisorSum(number) {
    let arr = [];
    let total = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            arr.push(i);
        }
    }

    for (const numb of arr) {
        total += numb
    }
    console.log(total);
}

divisorSum(4);

// Bài 4
function primeNumberCheck(number) {
    let primeNumber
    if (number <= 1) return false
    else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                primeNumber = false;
                break;
            }
            else {
                primeNumber = true;
            }
        }
    }
    console.log(primeNumber);
}

primeNumberCheck(3);

// Bài 5
function primeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function primeNumberSum(number) {
    let sum = 0;
    for (let index = 2; index <= number; index++) {
        if (primeNumber(index)) sum += index;

    }
    console.log(sum);
}

primeNumberSum(5);


/**
 * Xử lý chuỗi
 */

// Bài 1
function upperCaseSentence(sentence) {
    let sntnArr = sentence.split(' ');
    let newSentence = [];
    for (let word of sntnArr) {
        firstLetter = word.slice(0, 1);
        firstLetter = firstLetter.toUpperCase();
        restOfWord = word.slice(1, word.length);
        restOfWord = restOfWord.toLowerCase();
        word = firstLetter + restOfWord;
        
        newSentence.push(word);
    }
    console.log(newSentence.join(' '));
}

upperCaseSentence('HELLO my NaMe iS LINH');


// Bài 2
function spinalCase(sentence) {
    let newSentence = sentence.toLowerCase()
    let sntnArr = newSentence.split(' ');
    console.log(sntnArr.join('-'));
}

spinalCase('HELLO my NaMe iS LINH');

// Bài 3
function palindrome(sentence) {
    let newSntnArr = sentence.split(' ').join('');
    console.log(newSntnArr);

    let newArr = newSntnArr.split('');
    let reverseSntn = newArr.reverse().join('');
    console.log(reverseSntn);

    console.log(newSntnArr === reverseSntn)
}

palindrome('hello world');

// Bài 4
function containedSentence(p) {
    let {s1, s2} = p;
    let newS1 = s1.toLowerCase().split('');
    let newS2 = s2.toLowerCase().split('');

    console.log(newS1);
    console.log(newS2);

    if (newS1.length >= newS2.length) {
        let checker = (arr, target) => target.every(v => arr.includes(v));
        console.log(checker(newS1, newS2));
    }

    if (newS1.length < newS2.length) {
        let checker = (arr, target) => target.every(v => arr.includes(v));
        console.log(checker(newS2, newS1));
    }
}

containedSentence({
    s1: 'Hello World',
    s2: 'Hell '
});


/**
 * Xử lý mảng
 */

// Bài 1
function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    console.log(result);
}
filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]);

// Bài 2
function longestString(arr) {
    let length = 0;
    let longestString = [];
    for (let item of arr) {
        if (item.length > length) {
            length = item.length;
        }

    }
    for (let item of arr) {
        if (item.length === length) {
            longestString.push(item);
        }
    }
    console.log(longestString);
}

longestString(['aba', 'aa', 'ad', 'c', 'vcd'] );

// Bài 3
function differentNumber(p) {
    let {arr1, arr2} = p;
    let newArr = [];
    for (let n1 of arr1) {
        for (let n2 of arr2) {
            if (arr1[n1] == arr2[n2]) {
                return true;
            }
        }
    }

    return false;
}

console.log(
    differentNumber({
        arr1: [1, 2, 3],
        arr2: [1, 3, 4, 5, 5] 
    })
)