// const data = {
//         marks: 45,
//         name: "zahid",
//         gpa: 3.7,
//         pass: true,
//         friend: ["Abas", "Aqib"],
//         address: {
//             city: "peshawar",
//             country: "pakistan",
//         }

// }
// if (data.pass) {
//     console.log(data.friend)
// } else {


const students = [

    {
        marks: 45,
        name: "zahid",
        gpa: 3.7,
        pass: true,
        friend: ["Abas", "Aqib"],
        address: {
            city: "peshawar",
            country: "pakistan",
        }
    },
    {
        marks: 45,
        name: "zahid",
        gpa: 3.7,
        pass: true,
        friend: ["Abas", "Aqib"],
        address: {
            city: "peshawar",
            country: "pakistan",
        }
    },
    {
        marks: 20,
        name: "zahid",
        gpa: 3.7,
        pass: false,
        friend: ["Abas", "Aqib"],
        address: {
            city: "peshawar",
            country: "pakistan",
        }
    }
]

for (let i = 0; i < students.length; i++) {
    if (students[i].pass) {
        console.log(students[i].address.city)
    }
}