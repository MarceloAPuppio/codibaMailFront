import React from "react";
const Layout = ({ children }) => {
  return (
    <>
      <header>Hola Codiba</header>
      <main>{children}</main>
      <footer>Soy un footer</footer>
    </>
  );
};
export default Layout;
