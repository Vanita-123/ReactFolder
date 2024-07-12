import "./App.css";
import Folder from "./Components/Folder";
import data from "./Data.json";
function App() {
  return (
    <>
      <Folder dataFolder={data} />
    </>
  );
}

export default App;
