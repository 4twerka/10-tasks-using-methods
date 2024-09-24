import React from "react";

function Task6() {
    const numbers = [60, 24, 10, 4, 2];

    const isNumbersTrue = (arr) => {
        return arr.every((e) => e % 2 === 0);
    }

    const result = isNumbersTrue(numbers);
    console.log(result);

    return (
        <div>Task 6</div>
    );
}

export default Task6;