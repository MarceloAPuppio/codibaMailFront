import Addressee from "./components/addressee";
import Layout from "./components/layout";
import Main from "./components/main";
function App() {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    let DOMElement = document.getElementById(e.dataTransfer.getData("id"));
    e.target.appendChild(DOMElement);
    e.target.classList.contains("main-form__cc")
      ? DOMElement.classList.add("main-form__to__addressee--otherColor")
      : DOMElement.classList.remove("main-form__to__addressee--otherColor");
  };
  return (
    <Layout>
      <nav className="nav-settings"></nav>
      <nav className="nav-ppal">
        <ul className="nav-ppal__list">
          <li className="nav-ppal__list-item">
            <i class="fas fa-shopping-basket"></i> <span>Pedido DA</span>
          </li>
          <li className="nav-ppal__list-item">
            <i class="fas fa-shopping-basket"></i> <span>Pedido CIBA</span>
          </li>
          <li className="nav-ppal__list-item">
            <i class="fas fa-file-contract"></i> <span>Protocolo</span>
          </li>
          <li className="nav-ppal__list-item">
            <i class="fas fa-dollar-sign"></i>
            <span>Aviso aumento</span>
          </li>
        </ul>
      </nav>
      <aside className="tools-panel">
        <div
          className="tools__contactDraggableContainer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Addressee name="Adrián" />
          <Addressee name="Marcelo" />
          <Addressee name="Leandro" />
          <Addressee name="Natalia" />
          <Addressee name="NRC" />
          <Addressee name="DAP" />
        </div>
      </aside>
      <Main />
    </Layout>
  );
}

export default App;
