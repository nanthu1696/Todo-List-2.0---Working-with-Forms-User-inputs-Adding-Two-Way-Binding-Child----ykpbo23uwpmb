import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();
  let arr = [];
  for (let i = 0; i < props.list.length; i++) {
    if (props.list[i].date.getFullYear() === date.getFullYear()) {
      if (props.list[i].date.getMonth() === date.getMonth()) {
        if (props.list[i].date.getDate() === date.getDate()) {
          arr.push(props.list[i]);
        }
      }
    }
  }
  
  return (
    <div id="today-list">
      <ListRender list={props.list} />
    </div>
  );
};

export default Today;
