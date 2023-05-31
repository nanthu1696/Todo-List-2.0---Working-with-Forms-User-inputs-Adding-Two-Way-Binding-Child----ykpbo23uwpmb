import React , {useState, useEffect} from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  let {list} = props;
  const date = new Date();
  let [arr , setArr] = useState([]);
  useEffect(() =>{
    let newarr = [];
  for (let i = 0; i < props.list.length; i++) {
    if (props.list[i].date.getFullYear() === date.getFullYear()) {
      if (props.list[i].date.getMonth() === date.getMonth()) {
        if (props.list[i].date.getDate() === date.getDate()) {
          newarr.push(props.list[i]);
        }
      }
    }
  }
    setArr(newarr);
  }, [list]);
  
  return (
    <div id="today-list">
      <ListRender list={list} />
    </div>
  );
};

export default Today;
