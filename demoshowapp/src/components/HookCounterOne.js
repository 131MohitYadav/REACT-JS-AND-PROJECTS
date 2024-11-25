// useEffect defined here

import { useState, useEffect } from "react";

function HookCounterOne() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'You Clicked ${count} times';
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}> Click {count} times{" "}
            </button>
        </div>
    );
}

export default HookCounterOne;

