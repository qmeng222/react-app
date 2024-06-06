// Import component:
// import Message from "./Message";
// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

// Create the top level component (root) following Pascal Casing:
function App() {
  // const items = ["San Francisco", "New York", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    // <div>
    //   {/* Instead of writing both an opening and a closing tag, self-closing element do not have any children: */}
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>

    // Pass a child component and its properties to the root component:
    <div>
      <Alert text="👋 Hello, world!" />
    </div>
  );
}

export default App;
