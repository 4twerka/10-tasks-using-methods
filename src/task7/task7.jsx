import React from "react";

function Task7() {
    const numbers = [90, 52, 4, 16, 28, 10];

    const isThere10 = (arr) => {
        return arr.includes(10);
    }

    const result = isThere10(numbers);
    console.log(result);

    return (
        <div>Task 7</div>
    );
}

export default Task7