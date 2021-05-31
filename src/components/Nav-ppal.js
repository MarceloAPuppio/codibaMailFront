import React from "react";

function Nav_ppal() {
  return (
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
  );
}

export default Nav_ppal;
