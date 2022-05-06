import React from "react";

const RemoveBox = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row" }}
      key={props.individualTask.id}
    >
      <li style={{ list: props.individualTask.title }}>
        {props.individualTask.title}
      </li>
      <br />
      <button onClick={() => props.removeTaskFromArray(props.individualTask)}>
        Remove
      </button>
    </div>
  );
};

export default RemoveBox;
