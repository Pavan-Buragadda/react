import { TODOAPPBody } from "./components/project1/TODOAppBody";
import { TODOAPP } from "./components/project1/TODOAppContainer";
import { TodoItem1 } from "./components/project1/TODOItem1";
import { Todoitem2 } from "./components/project1/TodoItem2";
import "./App.css";
import Hello from "./Hello";
import LikeButton from "./likebutton";
import { ClockHeading } from "./components/project2/ClockHeading";
import { ClockSlogan } from "./components/project2/ClockSlogan";
import { CurrentTime } from "./components/project2/ClockCurrentTime";
function App() {
  /*============================== first component implementation =======================*/
  // return <div><h1>
  //   hello world
  // </h1>
  // {/* <LikeButton></LikeButton> */}
  // <Hello></Hello>
  // </div>
  /*============================== end ===================================================*/

  /*===========================todo project implementation===============================*/
  // return (
  //   <center className="todo-container">
  //     <div>
  //       <TODOAPP></TODOAPP>
  //       <div className="todo-body">
  //         <TODOAPPBody></TODOAPPBody>
  //         <TodoItem1></TodoItem1>
  //         <Todoitem2></Todoitem2>
  //       </div>
  //     </div>
  //   </center>
  // );
  /*========================todo project implementation end ==========================*/

  /*=========================Bharat clock Implememntation =========================== */
  // return (
  //   <div>
  //     <ClockHeading></ClockHeading>
  //     <ClockSlogan></ClockSlogan>
  //     <CurrentTime></CurrentTime>
  //   </div>
  // );
  /*================================end==============================================*/

  /*============================map and fragments ================================== */
  let foodItems = ["Dal", "GreenPeans", "GreenLeaves", "Panner"];
  return (
    <>
      <h1>health food iteams</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
  /* -------------------------------end==============================================*/
}
export default App;
