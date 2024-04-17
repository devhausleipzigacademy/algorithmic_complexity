// Function to find the smallest number in an array
function find_smallest_number(A, smallest_number) {
    let smallest_num = smallest_number;
    if (undefined == smallest_num) {
        smallest_num = A[0];
    }
    for (let i=0; i<A.length; i++) {
        if (smallest_num > A[i]) {
            // call function recursively
            return find_smallest_number(A, A[i]);
        }
    }
    return smallest_num;
}

console.log(find_smallest_number([4, 3, 6, 9, 8, 1, 22]))

// What is the worst-case runtime for the algorithm?

// What is the best-case runtime for the algorithm?

// Write a better function with a faster runtime!