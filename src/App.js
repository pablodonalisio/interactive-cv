import { useState } from "react";
import "./App.css";
import SideInfo from "./components/SideInfo/SideInfo";
import Main from "./components/Main/Main";

function App() {
  const [language, setLanguage] = useState("ES");
  return (
    <div className="App">
      <SideInfo lang={language} />
      <Main lang={language} />
    </div>
  );
}

export default App;
