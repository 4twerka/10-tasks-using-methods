import React from "react";

function Task8() {
    const numbers = [10, 20, 30, 40, 50, 100];

    const calcNum = (arr) => {
        let numbersResult = [];
        arr.forEach((e) => {
            numbersResult.push(e * 2);
        });
        return numbersResult
    }

    const result = calcNum(numbers);
    console.log(result);

    return(
        <div>Task 8</div>
    );
}

export default Task8;