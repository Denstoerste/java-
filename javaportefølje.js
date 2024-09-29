grades = [75, 92, 78, 77, 89, 62, 95, 65, 89, 93, 84]

let grades = [75, 92, 78, 77, 89, 62, 95, 65, 89, 93, 84];
console.log("Number of grades:", grades.length);

let grades = [75, 92, 78, 77, 89, 62, 95, 65, 89, 93, 84];

grades.forEach(function(grade) {
    let category;

    if (grade >= 90) {
        category = 'A';
    } else if (grade >= 80) {
        category = 'B';
    } else if (grade >= 70) {
        category = 'C';
    } else if (grade >= 60) {
        category = 'D';
    } else {
        category = 'F';
    }

    console.log(`Grade: ${grade}, Category: ${category}`);
});

let grades = [75, 92, 78, 77, 89, 62, 95, 65, 89, 93, 84;


let sum = grades.reduce(function(accumulator, grade) {
    return accumulator + grade;
}, 0);


let average = sum / grades.length;


let performance;

if (average >= 90) {
    performance = "Excellent";
} else if (average >= 80) {
    performance = "Good";
} else if (average >= 70) {
    performance = "Satisfactory";
} else {
    performance = "Needs Improvement";
}

console.log(`Average Grade: ${average.toFixed(2)}, Performance: ${performance}`);

const island = ['-', '-', '-', 'T', '-'];


console.log("Number of moves:", island.length);


let treasureCount = 0;


island.forEach(function(move, index) {
    if (move === 'T') {
        console.log(`Treasure found at move ${index + 1} :)`);
        treasureCount++;
    } else {
        console.log(`No treasure found at move ${index + 1} :(`);
    }
});


console.log("Number of treasures:", treasureCount);

function getStartupName() {

    const wordList1 = ['Tech', 'Hyper', 'Innovate', 'Smart', 'Next', 'Bright', 'Quantum', 'Alpha'];


    const wordList2 = ['Solutions', 'Dynamics', 'Ventures', 'Labs', 'Cloud', 'Analytics', 'Systems', 'Industries'];


    const randomIndex1 = Math.floor(Math.random() * wordList1.length);
    const randomIndex2 = Math.floor(Math.random() * wordList2.length);


    return `${wordList1[randomIndex1]} ${wordList2[randomIndex2]}`;
}


console.log(getStartupName());
