const students = [
    { name: "Leyla", points: 500 },
    { name: "Akif", points: 500 },
    { name: "Fikret", points: 3000 },
    { name: "Rashad", points: 500 },
    { name: "Turkan", points: 1900 },
    { name: "Sabir", points: 1000 },
    { name: "Idris", points: 340 },
    { name: "Nijat", points: 940 },
    { name: "Ismet", points: 1780 },
];


const updatedStudents = students.map(student => {
    return {
        name: student.name,
        points: student.points + 30
    };
});

console.log(updatedStudents);
