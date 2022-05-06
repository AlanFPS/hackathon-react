// function Checklist() {
//   const toDoArray = ["Run", "Read", "Drive"];
//   const IterateArrayWithChecklist = ({ arr }) => {
//     return (
//       <ol>
//         {arr.map((arrayItem) => {
//           return <ItemAndChecklist item={arrayItem} />;
//         })}
//       </ol>
//     );
//   };

//   const ItemAndChecklist = (props) => {
//     const [isComplete, setIsComplete] = React.useState(false);
//     return (
//       <div className="outer-box">
//         <li style={{ color: isComplete ? "green" : "black" }}>{props.item}</li>
//         <input
//           type="checkbox"
//           value={isComplete}
//           onClick={() => setIsComplete(!isComplete)}
//         />
//       </div>
//     );
//   };

//   return (
//     <div>
//       Checklist
//       <IterateArrayWithChecklist arr={toDoArray} />
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";
import listJson from "../list.json";
import RemoveBox from "./RemoveBox";

const Checklist = () => {
  const [listArr, setListArr] = React.useState(listJson);
  const [task, setTask] = React.useState("");

  function addToDoToArray() {
    if (task && !listArr.includes(task)) {
      let newTask = {
        title: task,
        id: String(Math.floor(Math.random() * 1)),
      };

      setListArr(listArr.concat(newTask));
      setTask("");
    }
  }

  // function sortBy() {
  //   let clone = [...listArr];
  //   clone.sort((a, b) => {
  //     return a.difficulty.localeCompare(b.difficulty);
  //   });

  //   setListArr(clone);
  // }

  function removeTaskFromArray(taskToRemove) {
    let filteredArr = listArr.filter(function (singleTask) {
      return taskToRemove !== singleTask;
    });
    setListArr(filteredArr);
  }

  return (
    <div>
      <h1>Create Tasks</h1>
      {/* <CountButton action={sortColors}>Sort</CountButton> */}
      <label>New Task</label>
      <input
        type="text"
        name="task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={addToDoToArray}>Add Task</button>
      <h3>To Do List</h3>
      <ul>
        {listArr.map(function (individualTask) {
          return (
            <RemoveBox
              individualTask={individualTask}
              removeTaskFromArray={removeTaskFromArray}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Checklist;
