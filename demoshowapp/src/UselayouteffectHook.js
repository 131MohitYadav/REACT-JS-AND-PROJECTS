import React,{useLayoutEffect, useState} from "react";

const LayoutEffect = () => {
    const [value, setValue] = useState("Hello Mohit Yadav!");

useLayoutEffect(() => {
    console.log(
        "UseLayoutEffect is called with the value of ",
        value
    );
}, [value]);
setTimeout(() => {
    setValue("Welcome to React Js Tutorial");
},2000);

return( 
    <div style= {{
        textAlign: "center",
        margin: "auto",
        fontWeight:"200",
        fontSize:"30px"
    }}
    >
        <h1 style={{color: "green" }}>{value}</h1> <a style = {{color:"red" }}>www.w3school.com</a>
    </div>
);
};

export default LayoutEffect;