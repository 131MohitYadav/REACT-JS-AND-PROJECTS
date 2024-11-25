import React,{useState} from "react";
import "./UsestateHook.css";
function HooksObject() {
    const [data, setData] = useState({
        username:'',
        password: ''
    });
    const [form, setForm] = useState({
        username:'',
        password: ''
    });
    const [submit, submitted] = useState(false);

    const printValues = e => {
        e.preventDefault();
        setForm({
            username: data.username,
            password: data.password
        });
        submitted(true);
    };
    const updateField = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <form onSubmit = {printValues}>
                <label>
                   Username:
                    <input 
                    value={data.username}
                    name="username"
                    onChange={updateField}
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input 
                    value={data.password}
                    name="password"
                    type="password"
                    onChange={updateField}
                    />
                </label>
                <br/>
                <button>Submit</button>
            </form>
            <h1> Note: Save your username and password and update automatically if you are changed your password or username</h1>
            <p>{submit ? form.username : null}</p>
            <p>{submit ? form.password : null}</p>
        </div>
        );
}

export default HooksObject;