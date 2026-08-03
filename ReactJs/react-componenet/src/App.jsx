import info from "./info";
import Hello from "./hello";
import Random from "./random";
function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      {info()}
      Hello component: {Hello()}
      {Random()}
    </div>
  );
}

export default App;
