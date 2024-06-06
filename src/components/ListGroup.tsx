// // Import the Fragment component (a build-in component) from the React library:
// import { Fragment } from "react";
import { MouseEvent } from "react";

// Define a child component:
function ListGroup() {
  let items = ["San Francisco", "New York", "Tokyo", "London", "Paris"];

  // // Helper func with customizable parameters:
  // const getMessage = () => {
  //   return items.length === 0 ? <p>💥 No item was found.</p> : null;
  // };

  // Event handler (helper func):
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>List</h1>

      {/* Conditional rendering: */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>💥 No item was found.</p> : null} */}
      {items.length === 0 && <p>💥 No item was found.</p>}
      <ul className="list-group">
        {/* Map each item to a list: */}
        {items.map((item, idx) => (
          <li
            // Properties:
            className="list-group-item"
            key={item}
            // onClick={(e) => console.log(item, idx, e)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
