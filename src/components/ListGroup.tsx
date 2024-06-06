// // Import the Fragment component (a build-in component) from the React library:
// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";

// Define props (properties) for the ListGroup component:
interface ListGroupProps {
  // pass data to components:
  items: string[];
  heading: string;

  // pass function(s) to components:
  onSelectItem: (item: string) => void;
}

// Define a child component:
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
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
              onSelectItem(item); // print the selected city name on console
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
