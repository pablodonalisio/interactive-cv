import "./App.css";
import SideInfo from "./components/SideInfo/SideInfo";
import Main from "./components/Main/Main";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
      <Info />
      <div id="curriculum">
        <SettingsPanel />
        <SideInfo />
        <Main />
      </div>
    </div>
  );
}

export default App;
