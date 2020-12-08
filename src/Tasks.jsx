import React, { useEffect, useState } from 'react';
import './style.css'

import config from './config/config'
import $ from 'jquery';
import List from './Lists'
import { waitFor } from '@testing-library/react';
function hide(elements) {
  elements.style.visibility = 'hidden';
}
function show(elements) {
  elements.style.visibility = 'visible';     // Show
}
const Tasks = () => {
  const [userId, setUserId] = useState("");
  const [count, setCount] = useState();
  useEffect(() => {
    getList();
    document.getElementById('hide').style.visibility = 'hidden';
    config.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user.uid);
        setUserId(user.uid);
        getCount();
      }
      else {
      }
    })
  }
  );
   function getCount() {
     config.database().ref('ToDoLIst/' + userId).once('value').then((snapshot) => {
      var count2 = snapshot.numChildren();
      // console.log(count2);
      setCount(count2)
      // alert(count2)
      // ...
    });
  }
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState({
    task:{}
  });

  function inputEvent(event) {
    setTask(event.target.value);
  }
   function addTask(e) {
    var root=document.getElementById('MyList')
    $(root).empty();
     config.auth().onAuthStateChanged((user) => {
      if (user) {
      }
      else {
        window.location.replace('/login')
      }
    });
    e.preventDefault();
    getCount();
    const fb = config.database().ref("ToDoLIst/" + userId);
    console.log(fb);

     fb.child(count).update({
      Status: "Active",
      Task: task,
      Date: new Date().toDateString(),
      Time: new Date().toLocaleTimeString(),
    });
  }
  var tasks={}
  function getList() {
   
    const fb = config.database().ref("ToDoLIst/" + userId);
    var root=document.getElementById('MyList')
    $(root).empty();
      fb.on("child_added",snap =>{
        var childKey = snap.key;
        var childData = snap.val();
        // console.log(childData.Task)
        tasks[childKey]=childData
        var mylist = document.getElementById('myList')
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(childData.Task));
        mylist.appendChild(li);
      
      });
  }
  console.log(taskList)
  document.title = "Tasks";
  return (
    <>

      <section className="text-gray-700 body-font">
        <form onSubmit={addTask} >
          <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Please Enter Location</h1> */}
              {/* <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p> */}
              <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  {/* <label for="hero-field" className="leading-7 text-sm text-gray-600">{task}</label> */}
                  <input required type="text" id="hero-field" name="hero-field"
                    className="w-full bg-gray-100 rounded border border-gray-300
           focus:border-indigo-500 text-base outline-none text-gray-700 
           py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={inputEvent}
                  />
                </div>
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 
        focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Task</button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Your To-DO List</p>
              {/* {getList()} */}
              <ul id="myList">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>


              <div className="flex">
                <button id="hide" className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">

                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span id="city" className="text-xs text-gray-600 mb-1"></span>
                    <br />
                    <span id="temp" className="title-font font-medium"></span>
                    <br />

                    <span id="type" className="title-font font-medium"></span>
                  </span>
                </button>

              </div>
            </div>
          </div>
        </form>
      </section >

    </>
  );
}

export default Tasks;
