
import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import './Hook.css';

const Hook = () => {
    const [num, setNum] = useState(0);

    const handleClick = () => {
        setNum(num + 1);
    };

    return (
        <div className="Hooks">
            <h2>{num}</h2>
            <button onClick={handleClick}>
                Add One
            </button>
        </div>
    );
};

export default Hook;
