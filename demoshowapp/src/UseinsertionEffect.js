import React, { useState } from "react";
import { useInsertionEffect } from "react";
function UseInsert () {
    const [btn_Theme, set_btn_Theme] = useState('dark');
    const [count, set_Count] = useState(0);

    useInsertionEffect(() =>{
        // inserting dynamic styles
        const rule = styleRuleFn(btn_Theme);
        document.head.appendChild(rule);
        return () => document.head.removeChild(rule);
    }, [btn_Theme, count]);
    const btnFn = () => {
        set_Count((prevCounter) => prevCounter + 1);
        set_btn_Theme(btn_Theme === 'dark' ? 'light' : 'dark'); 
    };

    return(
        <div>
            <h1 style={{color: 'green' }} >ReactJs Hooks</h1>
            <h3>useInsertionEffect Hook - Example </h3>
            <button onClick={btnFn}>
                {btn_Theme === 'dark' ? 'Dark Mode' : 'Light Mode'} - Click Count: {count}
            </button>
        </div>
    );
}

const styleRuleFn = (theme) => {
    const tag = document.createElement('style')
    tag.innerHTML = `
    button{
    color: ${theme === 'dark' ? 'white' : 'black'};
    background-color: ${theme === 'dark' ? 'black' : 'white'};
    transition: color 0.5s , background-color 0.5s;
    }
    `;
    return tag;
};

export default UseInsert;