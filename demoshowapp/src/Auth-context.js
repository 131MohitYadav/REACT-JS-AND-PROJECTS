import React from "react";

//creating the context object and passing the default values

const authContext =React.createContext({status:null,login:()=>{}});

export default authContext;