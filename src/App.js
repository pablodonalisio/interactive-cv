import "./App.css";
import SideInfo from "./components/SideInfo/SideInfo";
import Main from "./components/Main/Main";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";

function App() {
  return (
    <div className="App">
      <div id="curriculum">
        <SideInfo />
        <Main />
      </div>
      <SettingsPanel />
    </div>
  );
}

export default App;
