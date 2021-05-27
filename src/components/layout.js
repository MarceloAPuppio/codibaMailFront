import React from "react";
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Mailer</h1>
        <div>
          <input list="browsers" name="browser" id="browser" />
          <datalist id="browsers">
            <option value="Natalia" />
            <option value="Marcelo" />
            <option value="Leandro" />
            <option value="Adrian" />
          </datalist>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
export default Layout;
