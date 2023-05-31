import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  let arr = props.list.filter((task) => {
    const difftime = Math.abs(task.date-date);
    const diffdays = Math.ceil(difftime /(1000 * 60 *60 *24));
    if ( diffdays < 8){
      return true;
    }
    return false;
  });


  return (
    <div id="next-list">
      <ListRender list={arr}/>
    </div>
  );
};

export default Next7Days;
