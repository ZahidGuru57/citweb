const arr = [32, 45, 56, 67]
    // iteration
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// forEach
arr.forEach(function(item, index) {
        console.log(item, index)
    })
    // map
const newArr = arr.map(function(item, index) {
    return item * 2
})
console.log(newArr)
    // filter
const filterArr = arr.filter(function(item, index) {
    return item > 50
})
console.log(filterArr)
    // find
const findArr = arr.find(function(item, index) {
    return item > 50
})