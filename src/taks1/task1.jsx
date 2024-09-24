import React from "react";

function Taks1() {
    const C = [15, 30, -2];

    const celsiusToFahrenheit = (arr) => {   
       return arr.map((e) => {
        return (e * 9/5) + 32
       })
    }

    const result = celsiusToFahrenheit(C);
    console.log(result);

    return (
        <div>Task 1</div>
    );
}

export default Taks1;