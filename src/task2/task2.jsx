import React from "react";

function Task2() {
    const numbers = [2, 7, 18, 97, 32, 54, 55, 13, 89, 90, 36];

    const filterNumbers = (arr) => {
        return arr.filter((num) => {
            return num % 3 == 0;
        });
    }

    const result = filterNumbers(numbers);
    console.log(result);

    return (
        <div>Task 2</div>
    );
}

export default Task2;