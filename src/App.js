import { useState } from "react";
import List from "./component/List";
import "./app.css";


export default function Lists({dataSoruce}){
  const [mylist, setMylist] = useState(dataSoruce.mylist);
  const [rlist, setRlist] = useState(dataSoruce.recommendations);
  const addbut = ".\\add.png";
  const rmbut = ".\\remove.png";

  function removeitem(list, index){
    let arr = list.map((v)=>v);
    arr.splice(index,1);
    return arr;
  }

  const add = (event) => {
    let id = event.target.id;
    let index = rlist.findIndex(v=> v.id == id);
    setMylist((mylist)=> mylist.concat(rlist[index]));
    setRlist((rlist)=> removeitem(rlist, index));
  };

  function remove(event){
    let id = event.target.id;
    let index = mylist.findIndex(v=> v.id == id);
    setRlist((rlist)=> rlist.concat(mylist[index]));
    setMylist((mylist)=> removeitem(mylist, index));
  }

  return (
    <>
      <div>
        <h2>Edit My List</h2>
        <List list={mylist} onclick={remove} butimg={rmbut}/>     
      </div>
      <div>
        <h2>Recommendations</h2>
        <List list={rlist} onclick={add} butimg={addbut}/>
      </div>
      <div>
        <h2>My List</h2>
        <List list={mylist}/>     
      </div>
    </>
  );
}


