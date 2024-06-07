// Import component:
import { useState } from "react";
// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

// Create the top level component (root) following Pascal Casing:
function App() {
  const items = ["San Francisco", "New York", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // alert hook:
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // Pass a child component and its properties to the root component:
    <div>
      {/* Instead of writing both an opening and a closing tag, self-closing element do not have any children: */}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {/* <Alert text="👋 Hello, world!" /> */}
      <Alert>This is a simple string alert.</Alert>
      <Alert>
        This alert contains a combination of text and an{" "}
        <span>HTML element.</span>
      </Alert>

      {/* Show a dismissable alert only after the button is clicked (sets alertVisible to true): */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is a DISMISSABLE alert that appears only after the button is
          clicked.
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
