import React,{useContext} from "react";
import AuthContext from "./Auth-context";
import './Auth.css';

const Auth = () => {
    
        //now all the data stored in the context can  be accessed with the auth variable

        const auth = useContext(AuthContext);
        console.log(auth.status);
        return(

            <div>
                <h1> Check Are You Authenticated?</h1>
                {auth.status ?
                <p>Yes You are</p>
                :
                <p>Nopes</p>
                }
                <button onClick={auth.login}>Check</button>
            </div>
        );
    };

    export default Auth;