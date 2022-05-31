function isFibonacci(num) {
    let a = 1;
    let b = 1;
    let c;
    let temp;
    do {
        c = a + b;
        a = b;
        b = c;
    } while (c < num)
    if (num === 1 || c === num) {
        return true;
    } else {
        return false;
    }
}

let number = 9
console.log(isFibonacci(number))
