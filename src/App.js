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
      {
        name: "Leandro Vallone",
        shortName: "Lean",
        mail: "leandro@codiba.com",
      },
      {
        name: "Adrian Berta",
        shortName: "Adri",
        mail: "adrian@codiba.com",
      },
    ],
    dosAnclas: [],
    ciba: [],
  };
  const [to, setTo] = useState([]);
  const [cc, setCc] = useState([]);
  const [bodyPedidos, setBodyPedidos] = useState([]);


  return (
    <Layout>
      <ContextParameter.Provider
        value={{ to, setTo, cc, setCc, DESTINATARIOS, bodyPedidos, setBodyPedidos }}
      >
        <nav className="nav-settings"></nav>
        <NavPpal />
        <ToolsPanel />
        <Main />
      </ContextParameter.Provider>
    </Layout>
  );
}

export default App;
