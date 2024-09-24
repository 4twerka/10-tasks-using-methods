import React from "react";

function Task3() {
    const numbers = [1, 52, 47, 17, 16, 43];

    const calcNumbers = (arr) => {
        return arr.reduce((first, second) => first + second);
    }

    const result = calcNumbers(numbers);
    console.log(result);

    return (
        <div>Task 3</div>
    );
}

export default Task3;