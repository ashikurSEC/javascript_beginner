// !Sorting Array...

/*

const numbers = [3, 2, 5, 1, 4];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

*/

// a > b => return -1;
// a < b => return 1;
// a===b => return 0;

const courses = [
    { id: 1, name: "node.js" },
    { id: 2, name: "javaScript.js" },
  ];
  
  courses.sort(function (a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
  
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
  });
  console.log(courses);
  
