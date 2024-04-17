// Function to check if a certain number is in an array
function contains(A, item) {
    for (const element of A) {
        if (element == item) {
            return true;
        }
    }
    return false;
}

console.log(contains([3, 4, 5, 1, 2, 8, 54, 3, 2, 34], 33))

// What is the worst-case runtime for the algorithm?

// What is the best-case runtime for the algorithm?