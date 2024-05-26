const marks = [80, 80, 50];

function calculateGrade(average) {
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'; // For 90-100
}

function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}

const average = calculateAverage(marks);
console.log(calculateGrade(average)); 
