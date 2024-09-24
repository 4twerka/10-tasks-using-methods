import React from "react";

function Task5() {
    const numbers = [0, 9, 4, 52, -2, -8, -4, 90, 182];

    const isLessThen0 = (arr) => {
        return arr < 0;
    }

    const result = numbers.some(isLessThen0);

    console.log(result);

    return(
        <div>Task 5</div>
    );
}

export default Task5;