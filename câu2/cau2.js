function tryRemoveFromArray(arr, num) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            arr1.push(arr[i]);
        }
    }
    if (arr1.length === 0) {
        return arr;
    } else {
        return arr1;
    }
}
let array = [1,2,3,4,4,4,4,5,6,8]
console.log(tryRemoveFromArray(array,4))