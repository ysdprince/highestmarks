// Array of marks for five students
const marks = [85, 92, 78, 95, 88];

// Initialize a variable to store the highest marks
let highestMarks = marks[0];

// Iterate through the array to find the highest marks
for (let i = 1; i < marks.length; i++) {
  highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

// Display the highest marks to the teacher
console.log(`The highest marks scored by a student is: ${highestMarks}`);
