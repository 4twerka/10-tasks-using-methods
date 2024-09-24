import React from "react";

function Task10() {
    const firstArray = [1, 2, 3];
    const secondArray = [4, 5, 6];

    const combineArrays = (array1, array2) => {
        return array1.concat(array2);
    }

    const result = combineArrays(firstArray, secondArray);
    console.log(result);
    
    return(
        <div>Task 10</div>
    );
}

export default Task10;