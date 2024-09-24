import React from "react";

function Task4() {
    const numbers = [32, 4, 2, 17, 52, 90, 42, 11];

    const findNumbers = (arr) => {
        return arr.find((e) => {
            return e > 50;
        });
    }

    const result = findNumbers(numbers);
    console.log(result);

    return(
        <div>Task 4</div>
    );
}

export default Task4;