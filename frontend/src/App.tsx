import WithSubnavigation from "./components/Navbar/Navbar";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="navbar">
        <WithSubnavigation />
      </div>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="code-editor">
          <CodeEditor />
        </div>
      </div>
    </>
  );
}

export default App;
