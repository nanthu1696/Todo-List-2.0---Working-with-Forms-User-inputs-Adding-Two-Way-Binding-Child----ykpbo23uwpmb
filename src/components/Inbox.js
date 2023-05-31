import React, { useState, useRef } from "react";

const Inbox = (props) => {
  const [newTask, setNewTask] = useState(false);
  function addTodo(){}
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
          <input type="text" id="title" ref={}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={addTodo}>
              Add Task
            </button>
            <button className="new" onClick={() => setNewTask(false)}>
              Cancel
            </button>
            <input
              type="date"
              ref={}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={}>
              <div className="task">
                {list.title} ({list.date})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
