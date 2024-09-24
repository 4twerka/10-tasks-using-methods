import React from "react";

function Task9() {
    const numbers = [90, 54, 100, 4, 22, 52, 1, 0];

    const sortNumbers = (arr) => {
        return arr.sort((a, b) => {return b - a});
    }

    const result = sortNumbers(numbers);
    console.log(result);

    return (
        <div>Task 9</div>
    );
}

export default Task9;