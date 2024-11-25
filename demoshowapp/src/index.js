// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App2 from './App2';
// import App1 from './App1';
//import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(  <App1 />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App2/>);  

//***********************************************************//




// CREATE A FIRST COMPONENTS
// function Car() {
// 	return <h2>Hii My name is Mohit Yadav</h2>
// }


// RENDERING A COMPONENTS
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

// PROPS

// function Car(props){
// 	return <h1>I am a  {props.color} </h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color = "Boy" />);

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// )

//**************************************************//



 // React ES6 Array Method //

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myArray = ['apple', 'banana', 'orange'];

// const myList = myArray.map((item) => <p>{item}</p>)

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myList);


//***********************************************************//


      // React Events Handler//

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Car from './Car.jsx'

// function Football(){
//   const shoot = () => {
//     alert("Goal");
//   }
//   return( <button onClick={shoot}>Take the shot</button>);
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

//****************************************************//

   // React Conditional statemnts //

// if Statements

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Car from './Car.jsx'

// function MissedGoal(){
//       return<h1>MISSED</h1>
// }

// function MadeGoal(){
//       return<h1>GOAL</h1>
// }

// function Goal(props) {
//       const isGoal = props.isGoal;
//       if(isGoal){
//             return<MadeGoal/>;
//       }
//       return <MissedGoal/>;
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true} />);

//*********************************************************//


   // Logical && operator // 

// Note -> We can emebeede javaScipt in JSX by using curly braces

//  import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Car from './Car.jsx'


// function Garage(props){
//       const cars = props.cars;
//       return (
//             <>
//             <h1>Garage</h1>
//                   {cars.length  > 0 && 
//                   <h2>You have {cars.length} cars in your garage.</h2>
//                   }
//             </>
//       );
// }
// const cars = ['BMW', 'Audi', 'Ford'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars ={cars} />);


//*******************************************************//


 // React List //

// example ->

//  import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Car from './Car.jsx'

// function Naming(props){
//       return <li> My Name is {props.name}</li>
// }

//             function Person(){
//                   const ListName = [
//             {id: 1, name: 'Mohit'},
//             {id: 2, name: 'Rohit'},
//             {id: 3, name: 'Manish'},
//                   ];

//                   return(
//                         <>
//                         <h1>List of Names</h1>
//                               <ul>
//                                     {ListName.map((naming) => <Naming key = {naming.id} name = {naming.name} />)}
//                               </ul>
                              
//                         </>
//                   );
                  
//             }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Person />);


//************************************************//

// React Form //
// example -> Adding the form

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Car from './Car.jsx'

// function MyForm(){
//       return(
//       <form>
//       <label>Enter your name:
//       <input  type="text" />
//       </label>
//       </form>
//             )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


//**********************************************************//

//Example -> Handling the form

// import {useState} from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Car from './Car.jsx'

// function MyForm(){
//    const [name,setName] = useState("");

//    return (
//       <form>
//          <label>Enter Your Name:
//          <input type="text"
//             //Handling the form //
//               value={name}
//                onChange = {(e) => setName(e.target.value)}
//             />
//          </label>
//       </form>
//    )
 
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


//**********************************************************//

 // Example -> submitting the form


// import {useState} from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Car from './Car.jsx'

// function MyForm(){
//    const [name,setName] = useState(""); // e -> event

//    const handleSubmit = (event) => {
//      event.preventDefault();
//      alert(`The name you entered was: ${name}`);
//    }

//    return(
//       <form onSubmit={handleSubmit}>
//          <label>Enter Your Name:
//          <input type="text"
//                value={name}
//                onChange={(e) => setName(e.target.value)}
//             />
//          </label>
//          <input type="submit" />
//       </form>
//    )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);



//*******************************************************//

// example -> Multiple input fields in the form


// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/


//***********************************************//

// Textarea tag

// import {useState} from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Car from './Car.jsx'

// function MyForm(){
//    const [textarea, setTextarea] = useState("My name is mohit yadav and my college name is Technocrats group of instiution");

//    const handleChange = (event) => {
//       setTextarea(event.target.value)
//    }

//    return(
//       <form>
//       <textarea value={textarea} onChange={handleChange} /> 
//       </form>
//    )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


//**********************************************************//





// import { useState } from 'react'
// import ReactDOM from 'react-dom/client'



// function MyForm() {

//     const [myCar, setMyCar] = useState();

//     const handleChange = (event) => {
//         setMyCar(event.target.value)
//     }

//     return (
//         <form>
//             <select value={myCar} onChange={handleChange} >
//                 <option value="Home">HOME</option>
//                 <option value="About">ABOUT</option>
//                 <option value="Practise">PRACTISE</option>
//                 <option value="Contact">CONTACT</option>
//                 <option value="Blog">BLOG</option>
//                 <option value="Career">CAREER</option>
//             </select>
//         </form>

//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


//******************************************************** */

// REACT ROUTER  -> w3school example

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";


//import './index.css';
//import App1 from './App1';
//import App from './App';


// export default function App1() {
//    return (
//       <BrowserRouter>
//       <Routes>
//          <Route path="/" element={<Layout />}>
//          <Route index element={<Home />} />
//          <Route path = "blogs" element={<Blogs />} />
//          <Route path = "contact" element={<Contact />} />
//          <Route path = "*" element={<NoPage />} />
//          </Route>

//       </Routes>
//       </BrowserRouter>
//       );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App1/>);


// **************************************************


// REACT ROUTER  -> GeeksforGeeks example


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App3 from './App3.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App3 />)

// *************************************************//

// React js Styling 

//  Inline styling 



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Header = () => {
//     return (
//         <>
//         <h1 style={{color: "red"}}>Hello Mohit Yadav</h1>
//         <p>Welcome to react js</p>
//         </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <Header />)

// *************************************************//

// JavaScript Object-> you can also create own reactjs object for styling



// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const Header1 = () => {
//    const myStyle = {
//       color: "red",
//       backgroundColor: "black",
//       textAlign:"center",
//       fontFamily:"lucida",
//    };
//    const myCss = {
//       color: "white",
//       backgroundColor: "black",
//       textAlign:"center",
//       fontFamily:"lucida",
//       fontSize:"50px",
//    }

//    return(
//       <>
//       <h1 style = {myStyle}>Hello ReactJs </h1>
//       <p style={myCss}>Welcome to react js</p>
//       </>
//    );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <Header1 />)

// *************************************************//


// React js  CSS Module 

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Car from './Car.js';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <Car />)

// ****************************************//

// Styling using react js Sass(Syntactically Awesome StylingSheet)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './my-sass.scss';

// const Header2 = () => {
//    return(
//       <>
//       <h1>Hello Mohit </h1>
//       <p>Welocome to sass styling</p>
//       </>
//    );
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <Header2 />)

//********************************************* */


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import Bill  from './Bill.js';
//import MemeGenerate from './MemeGenerate.js';
//import Qrcode from './Qrcode.js';
//import DomainName from './components/DomainName/DomainName';
// import Hook from './Hook.js';
//import Context from './Context.js'; 
//import UseEffect from './UseEffect.js';
//import Usereducer from './Usereducer.js';
//import UsestateHook from './UsestateHook.js';
//import UselayouteffectHook from './UselayouteffectHook.js';
//import UseinsertionEffect from './UseinsertionEffect.js';
//import UseMemo from './Usememo.js';
//import UsecallBack from './UsecallBack.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Bill />)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <MemeGenerate />)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <UsecallBack />)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <UseMemo />)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <Qrcode />)



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <UseinsertionEffect />)




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <UseEffect />)



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <DomainName />)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <Context />)


//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render( <Usereducer />)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <UsestateHook />)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <UselayouteffectHook />)
