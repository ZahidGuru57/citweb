const arr = [32, 45, 56, 67]
const [first, second, third, fourth] = arr

console.log(first);

const student = {

    name: "John",
    age: 25,
    isActive: true,
    address: {
        city: "Hangu",
        country: "Pakistan"
    }
}

const { name, address } = student;
const { city, country } = address;

console.log(name)
console.log(address);

console.log(city);