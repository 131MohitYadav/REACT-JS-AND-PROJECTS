import React, { useMemo, useState } from "react";

function UseMemo() {
    const [number, setNumber] = useState();

    // using useMemo hook
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number]);

    const [counter, setCounter] = useState(0);

    // change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    };
    // increase the counter by 1 
    const counterHander = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="App">
            <h1>Welcome to MyWebPage</h1>
            <input className="inp"
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}>
            </input>
            <div className="out"> OUTPUT: {squaredNum}</div>
            <button onClick={counterHander}>Counter++</button>
            <div className="count" >Counter: {counter}</div>
        </div>
    );
}

// to make a function for square the value


function squareNum(number) {
    console.log("square will be done!");
    return Math.pow(number, 2);
}
export default UseMemo;
