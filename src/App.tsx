// Import component:
// import Message from "./Message";
import ListGroup from "./components/ListGroup";

// Create the top level component (root) following Pascal Casing:
function App() {
  return (
    <div>
      {/* Instead of writing both an opening and a closing tag, self-closing element do not have any children: */}
      <ListGroup />
    </div>
  );
}

export default App;
