import React from "react"
import ReactDom from "react-dom"

// My first componenent
function Greeting(){
  return  (
    <div>
      <h2>I'm Freek and this is my first component</h2>
      <Message />
      <Message2 />
    </div>
  );
}

const Message = () =>{
  return (
    <h4>This is my nested message</h4>
    // <Message2 />
  );
} 

const Message2 = () =>{
  return (
    <h5>This is my second nested message</h5>
  );
}

//ARROW FUNCTION
// const Greeting = () =>{
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "I'm Freek")
//   );
// }

//render my component
ReactDom.render(<Greeting/>, document.getElementById("root"));