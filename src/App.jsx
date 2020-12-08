
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './AboutUs';
import ContactUs from './ContactUs';
import Header from './Header';
import config from './config/config'
import $ from 'jquery';

import Tasks from './Tasks';
import Error from './Error'
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';
import Detail from './Detail';
import Wheather from './Wheter';
function App() {

    function hide(elements) {
        elements.style.visibility = 'hidden';
    }
    function show(elements) {
        elements.style.visibility = 'visible';     // Show
    }

    document.title = "Home";

    useEffect(()=>{
        config.auth().onAuthStateChanged((user) => {
            if (user) {
                hide(document.getElementById("loginID"));



            }
            else {
                // console.log("NO USer")


            }
        })
    })

    function authListener() {
    
    };

    authListener();

    return (

        <>

            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Tasks} />
                    <Route path="/contactUs/" exact={true} component={ContactUs} />
                    <Route path="/login/" exact={true} component={Login} />
                    <Route path="/SignUp/" exact={true} component={SignUp} />
                    <Route path="/Details/" exact={true} component={Detail} />
                    <Route path="/aboutUs" exact={true} component={About} />
                    {/* <Route path="/" exact={true} component={Wheather} /> */}
                    {/* <Route component={Tasks} /> */}
                </Switch>
                <Footer />
            </BrowserRouter>

        </>
    );
}

export default App;
