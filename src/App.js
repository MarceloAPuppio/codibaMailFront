import ContextParameter from "./ContextParameters";
import Layout from "./components/layout";
import Main from "./components/main";
import ToolsPanel from "./components/ToolsPanel";
import NavPpal from "./components/Nav-ppal";
import { useState } from "react";
function App() {
  const DESTINATARIOS = {
    codiba: [
      {
        name: "Marcelo Puppio",
        shortName: "Marce P",
        mail: "clientes@codiba.com",
      },
      {
        name: "Natalia González",
        shortName: "Naty",
        mail: "natalia@codiba.com",
      },
      {
        name: "Néstor Carrete",
        shortName: "NRC",
        mail: "nestor@codiba.com",
      },
      {
        name: "Diego Partal",
        shortName: "DAP",
        mail: "diego@codiba.com",
      },
    ],
    dosAnclas: [],
    ciba: [],
  };
  const [to, setTo] = useState([]);
  return (
    <Layout>
      <ContextParameter.Provider value={{ to, setTo, DESTINATARIOS }}>
        <nav className="nav-settings"></nav>
        <NavPpal />
        <ToolsPanel />
        <Main />
      </ContextParameter.Provider>
    </Layout>
  );
}

export default App;
