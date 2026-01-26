// ============================================
// FILTER WORKSHEET - 1 HOUR STUDY ASSIGNMENT
// ============================================

// DATASETS
// --------

interface Student {
  name: string;
  age: number;
  grade: number;
  studiesBackend: boolean;
}

const students: Student[] = [
  { name: "Alice", age: 20, grade: 85, studiesBackend: true },
  { name: "Bob", age: 22, grade: 72, studiesBackend: false },
  { name: "Charlie", age: 19, grade: 90, studiesBackend: true },
  { name: "Diana", age: 21, grade: 68, studiesBackend: false },
  { name: "Eve", age: 20, grade: 95, studiesBackend: true },
];

interface Product {
  name: string;
  price: number;
  inStock: boolean;
  rating: number;
}

const worksheetProducts: Product[] = [
  { name: "Laptop", price: 6500, inStock: true, rating: 4.5 },
  { name: "Phone", price: 4995, inStock: false, rating: 4.8 },
  { name: "Tablet", price: 6000, inStock: true, rating: 4.2 },
  { name: "Watch", price: 30999, inStock: true, rating: 4.7 },
];

interface User {
  username: string;
  email: string;
  isActive: boolean;
  lastLogin: string;
}

const users: User[] = [
  {
    username: "john_doe",
    email: "john@example.com",
    isActive: true,
    lastLogin: "2024-01-15",
  },
  {
    username: "jane_smith",
    email: "jane@test.com",
    isActive: false,
    lastLogin: "2023-12-01",
  },
  {
    username: "bob_wilson",
    email: "bob@example.com",
    isActive: true,
    lastLogin: "2024-01-10",
  },
  {
    username: "alice_brown",
    email: "alice@demo.com",
    isActive: true,
    lastLogin: "2024-01-14",
  },
];

// ============================================
// LEVEL 1: EASY (Single Condition)
// ============================================

// Question 1: Filter students who have a scholarship
// Your code here:

// console.log(students.filter(student => student.grade >= 85));

// // Question 2: Filter products that are in stock
// // Use worksheetProducts instead of products
// // Your code here:

// console.log(worksheetProducts.filter(product => product.inStock === true));

// // Question 3: Filter students who are 20 years old
// // Your code here:

// console.log(students.filter(student => student.age === 20));

// // Question 4: Filter users who are active
// // Your code here:

// console.log(users.filter( user => user.isActive === true));

// Question 5: Filter products with price less than 500
// Your code here:


// console.log(worksheetProducts.filter(product => product.price < 5000));

// ============================================
// LEVEL 2: MEDIUM (Multiple Conditions)
// ============================================

// Question 6: Filter students who have a scholarship AND grade above 85
// Your code here:

// console.log(students.filter(student => student.studiesBackend === true && student.grade >= 85));
// Question 7: Filter products that are in stock AND have rating above 4.5
// Your code here:

// console.log(worksheetProducts.filter(product => product.inStock === true && product.rating > 4.5));

// Question 8: Filter users with email ending in "example.com" AND are active
// Hint: Use .endsWith() method
// Your code here:

// console.log(users.filter( user => user.isActive === true && user.email.endsWith( "@example.com")));

// Question 9: Filter students who are either 19 OR 20 years old
// Your code here:




// console.log( students.filter(student => student.age === 19 || student.age ===20));

// Question 10: Filter products that are either out of stock OR priced above 600
// Your code here:

// console.log(worksheetProducts.filter(product => product.inStock === false || product.price > 6000));

// ============================================
// LEVEL 3: HARD (Complex Logic)
// ============================================

// Question 11: Filter students who have scholarship, are 20 or older, and grade is NOT below 80
// Your code here:

// console.log(students.filter(student => student.age >= 20 && student.grade >= 80));

// Question 12: Filter products that are good deals (in stock, price < 500, rating > 4.5)
// Your code here:

// console.log(worksheetProducts.filter(product => product.inStock === true && product.price > 5000 && product.rating > 4.5));

// Question 13: Filter users who logged in during January 2024 (lastLogin starts with "2024-01")
// Hint: Use .startsWith() method
// Your code here:

// console.log(users.filter( user => user.lastLogin.startsWith("2024-01")));

// Question 14: Filter students whose names contain the letter "a" (case-insensitive)
// Hint: Use .toLowerCase() and .includes()
// Your code here:

// console.log(students.filter( student => student.name.toLowerCase().includes("a") ));

// ============================================
// BONUS CHALLENGE
// ============================================

// Question 15: Create a function that takes an array of students and a minimum grade,
// and returns only scholarship students above that grade, sorted by grade (highest first)
// Hint: Combine filter() and sort()
// Your code here:

// const getScholarshipStudents = (student: Student[], grade: number) => student.filter(x => x.grade >= grade).sort((a, b)=> b.grade - a.grade) ;

// console.log(getScholarshipStudents(students, 85));