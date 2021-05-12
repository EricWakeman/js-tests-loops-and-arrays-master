// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
    var total = num
    for (let index = 2; index <= num; index++) {
        if (index == num) {
            return total
        }
        total = (total * index)

    }

}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
    var list = [];
    var sum = 0
    for (let index = n1; index <= n2; index++) {
        list.push(index);
    }
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        sum += element;
    }
    return sum



}

// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
    var list = []
    var divided = []
    for (let index = start; index <= end; index++) {
        list.push(index)
    }
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (element % divisor == 0) {
            divided.push(element)
        }

    }
    console.log(divided)
    return divided.length
}
