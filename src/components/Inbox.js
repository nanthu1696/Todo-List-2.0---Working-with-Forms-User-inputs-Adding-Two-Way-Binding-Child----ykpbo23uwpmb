import React, { useState, useRef } from "react";

const Inbox = (props) => {
  const [newTask, setNewTask] = useState(false);
  const [number, setNumber] = useState(4);
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  function addTodo(event){
    event.preventDefault();
    let title = titleRef.current.value;
    let date = new Date(dateRef.current.value);
    let obj = { "number": number, "title": title, "date": date };
    let arr = [...props.list, obj];
    console.log(arr);
    props.append(arr);
    setNewTask(false);
    setNumber(number+1);
  }
  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={() => setNewTask(true)} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={titleRef}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={addTodo}>
              Add Task
            </button>
            <button className="new" onClick={() => setNewTask(false)}>
              Cancel
            </button>
            <input
              type="date"
              ref={dateRef}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
                {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
