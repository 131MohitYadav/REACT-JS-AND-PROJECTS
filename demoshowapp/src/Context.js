import React, {useState} from "react";
import Auth from "./Auth";
import AuthContext from "./Auth-context";
//import './Auth.css';



const Context = () => {
    // using the state to dynamically pass the value to the context

    const [authstatus, setauthstatus] = useState(false);
    const login = () => {
        setauthstatus(true);
    };

    return(
        <React.Fragment>
            <AuthContext.Provider value = {{status: authstatus,login:login}}>
                <Auth />
            </AuthContext.Provider>
        </React.Fragment>
    );
};

export default Context; 