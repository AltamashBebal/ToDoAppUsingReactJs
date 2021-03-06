import React, { useState } from 'react';
import './style.css'
import config from './config/config'
import { Widgets } from '@material-ui/icons';
import {  Link } from 'react-router-dom';

const Login = () => {

//    function authListener(){
//         config.auth().onAuthStateChanged((user)=>{
//             if(user){
//                 window.location.replace('/')
//             }
//             else{
//                 console.log("NO USer")
//             }
//         })
//     };

//     authListener();
    const [email1,setEmail]=useState("");
    const [pass,setPassword]=useState("");
    function email(e){
        setEmail(e.target.value)
    }
function password(e){
    setPassword(e.target.value);
}

function login(e){
    e.preventDefault();
    console.log("Woking")
    var emailId=email1;
    var passW=pass;
     config.auth().signInWithEmailAndPassword(emailId,passW).then((u)=>{
        window.location.replace('/')


     }).catch((err)=>{
         alert("Invalid Username or Password")
     }) 
  

}

    document.title = "Login";
    return (
        <>
        <form onSubmit={login}>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div> */}
                    <div id="login" className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
                        <div className="relative mb-4">
                            <label for="full-name" className="leading-7 text-sm text-gray-600">Email</label>
                            <input required type="email" onChange={email} id="full-name" name="full-name"
                                className="w-full bg-white rounded border border-gray-300 
         focus:border-indigo-500 text-base outline-none text-gray-700 py-1 
         px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
                            <input required type="password" onChange={password} id="email" name="email"
                                className="w-full bg-white rounded border border-gray-300 
        focus:border-indigo-500 text-base outline-none text-gray-700 
        py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</button>
                        <p  className="text-xs text-gray-500 mt-3">Not Have An Account <Link to="/SignUp"> Sign Up Here </Link> .</p>
                    </div>
                </div>
            </section>
            </form>
        </>
    );
}

export default Login;