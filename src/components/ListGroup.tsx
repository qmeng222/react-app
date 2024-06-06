// // Import the Fragment component (a build-in component) from the React library:
// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

// Define a child component:
function ListGroup({ items, heading }: ListGroupProps) {
  // (State) hook: [variable, updater_func]
  // const [name, setName] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(-1);

  // // Helper func with customizable parameters:
  // const getMessage = () => {
  //   return items.length === 0 ? <p>💥 No item was found.</p> : null;
  // };

  // // Event handler (helper func):
  // const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>{heading}</h1>

      {/* Conditional rendering: */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>💥 No item was found.</p> : null} */}
      {items.length === 0 && <p>💥 No item was found.</p>}
      <ul className="list-group">
        {/* Map each item to a list: */}
        {items.map((item, idx) => (
          <li
            // Properties:
            // className="list-group-item active"
            className={
              selectedIdx === idx ? "list-group-item active" : "list-group-item"
            }
            key={item}
            // onClick={(e) => console.log(item, idx, e)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIdx(idx);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
